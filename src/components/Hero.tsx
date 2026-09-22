import { Gamepad2, ChevronDown, Zap } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center cyber-grid scanlines overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(0,240,255,0.12) 0%, transparent 60%)',
        }}
      />
      {/* Moving scan line */}
      <div className="absolute left-0 right-0 h-px bg-cyan-400/60 animate-scan" style={{ filter: 'drop-shadow(0 0 8px #00f0ff)' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-cyan-400/40 bg-cyan-500/5 animate-float-up">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 font-body text-sm tracking-widest uppercase">
            Línea temporal interactiva
          </span>
        </div>

        <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight animate-float-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <span className="block text-white mb-2">La Historia de los</span>
          <span className="block neon-text-cyan animate-flicker">VIDEOJUEGOS</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-body leading-relaxed animate-float-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          Un viaje desde los primeros experimentos en laboratorios hasta los
          mundos inmersivos del futuro. Recorre cada era y descubre cómo los
          videojuegos transformaron el entretenimiento.
        </p>

        <button
          onClick={onExplore}
          className="mt-10 group relative inline-flex items-center gap-3 px-8 py-4 font-display font-bold text-sm tracking-widest uppercase text-dark-900 bg-cyan-400 clip-corner-sm animate-pulse-glow animate-float-up transition-transform hover:scale-105"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <Gamepad2 className="w-5 h-5" />
          Iniciar recorrido
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16 animate-float-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
          {[
            { value: '70+', label: 'Años de historia' },
            { value: '8', label: 'Eras' },
            { value: '∞', label: 'Posibilidades' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-black text-3xl sm:text-4xl text-cyan-400" style={{ textShadow: '0 0 15px rgba(0,240,255,0.5)' }}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-dark-900 z-10" />
    </section>
  );
}
