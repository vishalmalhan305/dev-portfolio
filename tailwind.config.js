/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-bg':      '#080b14',
        'cyber-cyan':    '#7DF9FF',
        'cyber-blue':    '#0A66C2',
        'cyber-text':    '#c9d1d9',
        'cyber-dim':     '#8b949e',
        // yotei aliases remapped to cyber palette — all existing component classes work unchanged
        'yotei-black':     '#080b14',
        'yotei-dark-gray': '#0d1117',
        'yotei-gray':      '#161b22',
        'yotei-white':     '#FFFFFF',
        'yotei-cream':     '#c9d1d9',
        'yotei-gold':      '#7DF9FF',
        'yotei-red':       '#C41E3A',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'mono':  ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}