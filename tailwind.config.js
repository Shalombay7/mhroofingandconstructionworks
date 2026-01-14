/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a', // Midnight Navy for backgrounds/footers
          primary: '#1e40af', // Trustworthy Blue for headers
          accent: '#f97316', // Safety Orange for Buttons/CTAs
          light: '#f8fafc', // Off-white for section backgrounds
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}