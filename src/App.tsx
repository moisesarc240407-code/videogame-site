import { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import EraSection from '@/components/EraSection';
import Footer from '@/components/Footer';
import GameModal from '@/components/GameModal';
import ConsoleModal from '@/components/ConsoleModal';
import { eras } from '@/data/eras';
import type { EraGame, EraConsole, Era } from '@/data/eras';

export default function App() {
  const [activeId, setActiveId] = useState('hero');
  const [selectedGame, setSelectedGame] = useState<EraGame | null>(null);
  const [selectedConsole, setSelectedConsole] = useState<EraConsole | null>(null);
  const [selectedEra, setSelectedEra] = useState<Era | null>(null);
  const isNavigating = useRef(false);

  const handleGameClick = useCallback((game: EraGame, era: Era) => {
    setSelectedEra(era);
    setSelectedGame(game);
  }, []);

  const handleConsoleClick = useCallback((console: EraConsole, era: Era) => {
    setSelectedEra(era);
    setSelectedConsole(console);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedGame(null);
    setSelectedConsole(null);
    setSelectedEra(null);
  }, []);

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      isNavigating.current = true;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
      setTimeout(() => {
        isNavigating.current = false;
      }, 800);
    }
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating.current) return;

      const sections = ['hero', ...eras.map((e) => e.id)];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const sections = ['hero', ...eras.map((era) => era.id)];
        const currentIdx = sections.indexOf(activeId);
        if (currentIdx === -1) return;

        const nextIdx =
          e.key === 'ArrowDown'
            ? Math.min(currentIdx + 1, sections.length - 1)
            : Math.max(currentIdx - 1, 0);

        scrollToId(sections[nextIdx]);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeId, scrollToId]);

  const navItems = eras.map((e) => ({
    id: e.id,
    shortTitle: e.shortTitle,
    emoji: e.emoji,
  }));

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar activeId={activeId} onNavigate={scrollToId} eras={navItems} />

      <Hero onExplore={() => scrollToId(eras[0].id)} />

      <Timeline activeId={activeId} onNavigate={scrollToId} />

      <div className="relative">
        {/* Section dividers with glow */}
        {eras.map((era, idx) => (
          <div key={era.id}>
            <div
              className="h-px max-w-5xl mx-auto"
              style={{
                background: `linear-gradient(90deg, transparent, ${era.color}40, transparent)`,
              }}
            />
            <EraSection era={era} index={idx} onGameClick={handleGameClick} onConsoleClick={handleConsoleClick} />
          </div>
        ))}
      </div>

      <Footer />

      <GameModal
        game={selectedGame}
        eraColor={selectedEra?.color ?? '#00f0ff'}
        eraTitle={selectedEra?.title ?? ''}
        onClose={handleCloseModal}
      />

      <ConsoleModal
        console={selectedConsole}
        eraColor={selectedEra?.color ?? '#00f0ff'}
        eraTitle={selectedEra?.title ?? ''}
        onClose={handleCloseModal}
      />
    </div>
  );
}
