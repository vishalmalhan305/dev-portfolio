/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yotei-black': '#0D0D0D',
        'yotei-dark-gray': '#1A1A1A',
        'yotei-gray': '#2A2A2A',
        'yotei-white': '#FFFFFF',
        'yotei-cream': '#F5E6D3',
        'yotei-gold': '#D4AF37',
        'yotei-red': '#C41E3A',
      },
    },
  },
  plugins: [],
}