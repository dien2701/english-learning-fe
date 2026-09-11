/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#E6F4FA',
          100: '#CBE8F5',
          200: '#9DD4EC',
          500: '#008FD5',
          600: '#007BB8',
          700: '#006193',
        },
        surface: {
          main: '#F7F9FF',
          card: '#FFFFFF',
          border: '#E5E8EE',
        }
      }
    },
  },
  plugins: [],
}
