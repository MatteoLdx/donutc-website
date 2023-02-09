/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*.js'],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
  variants: {
    extend: {
      display: ['dark']
    },
  },
}