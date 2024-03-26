/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans:['Avenir', 'system-ui'],
      serif:['ui-serif', 'Georgia'],
    }, 
    fontSize: {
      base: '28px',
    }, 
    colors: {
      'black': '#433E3F',
      'green': '#74C947',
      'white': '#F5F5F5',
      'grey': '#697268',
      'blue': '#B7D1DA',
      'slate': '#463730',
      'red': '#dd1212',
    },
  },
  plugins: [],
}

