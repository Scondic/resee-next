/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'slate': {
        100: '#FFFFFF',
        200: '#F8F8F6',
        300: '#EFEFEB',
        400: '#D4D4D4',
        500: '#B8B8B8',
        600: '#A5A6A3',
        700: '#444444',
        800: '#3A3A3A',
        900: '#2F2F2F',
      },
    },
    extend: {},
  },
  plugins: [],
}
