/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mama-black': '#181818',
        'mama-gold': '#C9A063',
        'mama-gray': {
          light: '#F5F5F5',
          dark: '#232323',
        },
        'mama-blue': '#6EC1E4',
        'mama-pink': '#F48FB1',
      },
    },
  },
  plugins: [],
}
