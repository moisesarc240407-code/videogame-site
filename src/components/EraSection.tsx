import { MousePointerClick, Gamepad2 } from 'lucide-react';
import type { Era, EraGame, EraConsole } from '@/data/eras';

interface EraSectionProps {
  era: Era;
  index: number;
  onGameClick: (game: EraGame, era: Era) => void;
  onConsoleClick: (console: EraConsole, era: Era) => void;
}

export default function EraSection({ era, index, onGameClick, onConsoleClick }: EraSectionProps) {
  const Icon = era.icon;
  const isEven = index % 2 === 0;

  return (
    <section
      id={era.id}
      className="relative min-h-screen flex items-center py-24 px-4 scroll-mt-16"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at ${isEven ? '20%' : '80%'} 50%, ${era.color}15 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
          {/* Visual card */}
          <div className="w-full lg:w-1/2">
            <div
              className="relative p-8 sm:p-10 clip-corner bg-dark-800/80 backdrop-blur-sm transition-all duration-500"
              style={{
                border: `1px solid ${era.color}50`,
                boxShadow: `0 0 30px ${era.color}20, inset 0 0 20px ${era.color}08`,
              }}
            >
              {/* Decorative top bar */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent, ${era.color}, transparent)` }} />

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${era.color}15`,
                    border: `1px solid ${era.color}60`,
                  }}
                >
                  <Icon className="w-8 h-8" style={{ color: era.color }} />
                </div>
                <div>
                  <div className="text-3xl">{era.emoji}</div>
                </div>
              </div>

              <div className="font-pixel text-xs mb-4" style={{ color: era.color }}>
                {era.period}
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4 tracking-wide">
                {era.title}
              </h3>

              {/* Decorative glow line */}
              <div className="glow-line mb-6 opacity-50" />

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-body">
                {era.description}
              </p>

              {/* Consoles */}
              {era.consoles.length > 0 && (
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-body flex items-center gap-2">
                    <Gamepad2 className="w-3.5 h-3.5" style={{ color: era.color }} />
                    Consolas destacadas
                    <span className="text-gray-600 flex items-center gap-1 normal-case tracking-normal text-[10px]">
                      <MousePointerClick className="w-3 h-3" /> Clic para ver historia
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {era.consoles.map((console) => (
                      <button
                        key={console.name}
                        onClick={() => onConsoleClick(console, era)}
                        className="group inline-flex items-center gap-2 px-3 py-1.5 rounded text-sm font-body transition-all duration-300 hover:scale-105 cursor-pointer"
                        style={{
                          background: `${era.color}08`,
                          border: `1px solid ${era.color}25`,
                        }}
                      >
                        <span
                          className="text-xs font-mono"
                          style={{ color: era.color }}
                        >
                          {console.year}
                        </span>
                        <span className="text-gray-400 group-hover:text-white transition-colors">
                          {console.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Games list */}
              {era.games.length > 0 && (
                <div className="mt-8">
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-body flex items-center gap-2">
                    Juegos destacados
                    <span className="text-gray-600 flex items-center gap-1 normal-case tracking-normal text-[10px]">
                      <MousePointerClick className="w-3 h-3" /> Clic para ver historia
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {era.games.map((game) => (
                      <button
                        key={game.name}
                        onClick={() => onGameClick(game, era)}
                        className="group inline-flex items-center gap-2 px-3 py-1.5 rounded text-sm font-body transition-all duration-300 hover:scale-105 cursor-pointer"
                        style={{
                          background: `${era.color}10`,
                          border: `1px solid ${era.color}30`,
                        }}
                      >
                        <span
                          className="text-xs font-mono"
                          style={{ color: era.color }}
                        >
                          {game.year}
                        </span>
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {game.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {era.id === 'futuro' && (
                <div className="mt-8 p-4 rounded-lg border border-dashed" style={{ borderColor: `${era.color}40` }}>
                  <p className="text-sm text-gray-400 italic font-body">
                    "El futuro de los videojuegos está por escribirse..."
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Era number / decorative side */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <div
              className="font-display font-black text-7xl sm:text-8xl lg:text-9xl opacity-20 select-none"
              style={{ color: era.color, textShadow: `0 0 40px ${era.color}40` }}
            >
              {String(index + 1).padStart(2, '0')}
            </div>
            <div
              className="mt-4 font-pixel text-xs tracking-widest opacity-60"
              style={{ color: era.color }}
            >
              ERA {index + 1} / {8}
            </div>
            <div className="mt-6 flex gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-sm transition-all duration-300"
                  style={{
                    background: i === index ? era.color : '#232340',
                    boxShadow: i === index ? `0 0 8px ${era.color}` : 'none',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
