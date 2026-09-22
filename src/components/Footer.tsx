import { Gamepad2, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-500/20 bg-dark-900 py-12 px-4 scanlines">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Gamepad2
            className="w-6 h-6 text-cyan-400"
            style={{ filter: 'drop-shadow(0 0 6px rgba(0,240,255,0.7))' }}
          />
          <span className="font-display font-bold text-lg tracking-wider text-white">
            GAME<span className="text-cyan-400">HISTORY</span>
          </span>
        </div>

        <p className="text-gray-500 text-sm font-body max-w-xl mx-auto">
          Un recorrido interactivo por la historia de los videojuegos, desde los
          primeros experimentos hasta el futuro de la tecnología interactiva.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 text-gray-600 text-xs font-body">
          <span>Presiona</span>
          <kbd className="px-2 py-1 rounded bg-dark-700 border border-cyan-500/30 text-cyan-400 font-mono">↑</kbd>
          <kbd className="px-2 py-1 rounded bg-dark-700 border border-cyan-500/30 text-cyan-400 font-mono">↓</kbd>
          <span>para navegar entre eras</span>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-body">
            © 2026 GameHistory. Hecho por Moises para gamers <Heart className="inline w-3 h-3 text-pink-500" />.
          </p>
          <div className="flex items-center gap-4 text-gray-500">
            <a href="#hero" className="hover:text-cyan-400 transition-colors text-sm font-body">
              Volver arriba
            </a>
            <span className="text-gray-700">|</span>
            <span className="text-sm font-body flex items-center gap-1">
              <Github className="w-4 h-4" /> Recurso educativo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
