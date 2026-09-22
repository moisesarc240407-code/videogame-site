import { useEffect, useState } from 'react';
import { Gamepad2, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeId: string;
  onNavigate: (id: string) => void;
  eras: { id: string; shortTitle: string; emoji: string }[];
}

export default function Navbar({ activeId, onNavigate, eras }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleClick('hero')}
            className="flex items-center gap-2 group"
          >
            <Gamepad2
              className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors"
              style={{ filter: 'drop-shadow(0 0 6px rgba(0,240,255,0.7))' }}
            />
            <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-cyan-300 transition-colors">
              GAME<span className="text-cyan-400">HISTORY</span>
            </span>
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-1">
            {eras.map((era) => (
              <button
                key={era.id}
                onClick={() => handleClick(era.id)}
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded ${
                  activeId === era.id
                    ? 'text-cyan-300 bg-cyan-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="mr-1">{era.emoji}</span>
                {era.shortTitle}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-900/98 backdrop-blur-lg border-t border-cyan-500/20 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {eras.map((era) => (
              <button
                key={era.id}
                onClick={() => handleClick(era.id)}
                className={`w-full text-left px-4 py-3 rounded transition-all duration-300 flex items-center gap-3 ${
                  activeId === era.id
                    ? 'text-cyan-300 bg-cyan-500/10 border-l-2 border-cyan-400'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                }`}
              >
                <span className="text-xl">{era.emoji}</span>
                <span className="font-medium">{era.shortTitle}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
