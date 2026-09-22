/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-900': '#0a0a0f',
        'dark-800': '#12121c',
        'dark-700': '#1a1a2e',
        'dark-600': '#232340',
        'neon-cyan': '#00f0ff',
        'neon-green': '#39ff14',
        'neon-pink': '#ff2a6d',
        'neon-purple': '#b026ff',
        'neon-yellow': '#fff200',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
