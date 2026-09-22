import { useEffect } from 'react';
import { X, Gamepad2, Calendar, User, Monitor, Tag } from 'lucide-react';
import type { EraGame } from '@/data/eras';

interface GameModalProps {
  game: EraGame | null;
  eraColor: string;
  eraTitle: string;
  onClose: () => void;
}

export default function GameModal({ game, eraColor, eraTitle, onClose }: GameModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (game) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [game, onClose]);

  if (!game) return null;

  const details = [
    { icon: Calendar, label: 'Año', value: game.year },
    { icon: User, label: 'Creador / Estudio', value: game.developer },
    { icon: Monitor, label: 'Plataforma', value: game.platform },
    { icon: Tag, label: 'Género', value: game.genre },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-float-up"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto clip-corner bg-dark-800 border p-6 sm:p-8"
        style={{
          borderColor: `${eraColor}60`,
          boxShadow: `0 0 40px ${eraColor}30, 0 0 80px ${eraColor}15`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(90deg, transparent, ${eraColor}, transparent)` }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-lg bg-dark-700/80 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: `${eraColor}15`, border: `1px solid ${eraColor}50` }}
          >
            <Gamepad2 className="w-5 h-5" style={{ color: eraColor }} />
          </div>
          <span className="text-xs uppercase tracking-widest text-gray-500 font-body">
            {eraTitle}
          </span>
        </div>

        <h2
          className="font-display font-bold text-2xl sm:text-3xl text-white mb-1 tracking-wide"
          style={{ textShadow: `0 0 20px ${eraColor}30` }}
        >
          {game.name}
        </h2>

        <div
          className="font-pixel text-xs mb-6"
          style={{ color: eraColor }}
        >
          {game.year}
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {details.map((detail) => {
            const Icon = detail.icon;
            return (
              <div
                key={detail.label}
                className="flex items-start gap-3 p-3 rounded-lg bg-dark-700/50 border border-white/5"
              >
                <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: eraColor }} />
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 font-body">
                    {detail.label}
                  </div>
                  <div className="text-sm text-gray-200 font-body font-medium">
                    {detail.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* History text */}
        <div className="mb-2">
          <div
            className="text-xs uppercase tracking-widest mb-3 font-body font-semibold"
            style={{ color: eraColor }}
          >
            Historia
          </div>
          <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, ${eraColor}, transparent)` }} />
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-body">
            {game.history}
          </p>
        </div>

        {/* Footer hint */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center">
          <span className="text-xs text-gray-600 font-body">
            Presiona <kbd className="px-1.5 py-0.5 rounded bg-dark-700 border border-white/10 text-gray-400 font-mono text-xs">ESC</kbd> para cerrar
          </span>
        </div>
      </div>
    </div>
  );
}
