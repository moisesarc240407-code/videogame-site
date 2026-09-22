import { eras } from '@/data/eras';

interface TimelineProps {
  activeId: string;
  onNavigate: (id: string) => void;
}

export default function Timeline({ activeId, onNavigate }: TimelineProps) {
  return (
    <div className="relative py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wider">
          LÍNEA <span className="neon-text-cyan">TEMPORAL</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm tracking-wide">
          Haz clic en cada nodo para explorar la era
        </p>
      </div>

      {/* Timeline track */}
      <div className="relative overflow-x-auto pb-4">
        <div className="relative flex items-center min-w-max justify-center gap-0 px-4">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent -translate-y-1/2" />

          {eras.map((era, idx) => {
            const isActive = activeId === era.id;
            return (
              <div key={era.id} className="relative flex flex-col items-center z-10" style={{ minWidth: '110px' }}>
                {/* Period label above */}
                <div className={`mb-3 text-xs font-body tracking-wide transition-all duration-300 ${isActive ? 'text-cyan-300 font-semibold' : 'text-gray-600'}`}>
                  {era.period.split(' – ')[0]}
                </div>

                {/* Node */}
                <button
                  onClick={() => onNavigate(era.id)}
                  className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'scale-125 animate-node-pulse'
                      : 'hover:scale-110'
                  }`}
                  style={{
                    background: isActive ? era.color : '#1a1a2e',
                    border: `2px solid ${era.color}`,
                    boxShadow: isActive
                      ? `0 0 20px ${era.color}80`
                      : `0 0 8px ${era.color}30`,
                  }}
                  aria-label={era.shortTitle}
                >
                  <span className="text-lg">{era.emoji}</span>
                </button>

                {/* Short title below */}
                <div className={`mt-3 text-xs font-body tracking-wide transition-all duration-300 text-center ${isActive ? 'text-white font-semibold' : 'text-gray-600'}`}>
                  {era.shortTitle}
                </div>

                {/* Connector arrow */}
                {idx < eras.length - 1 && (
                  <div className="absolute top-1/2 -right-2 w-4 h-0.5 bg-cyan-500/30 -translate-y-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
