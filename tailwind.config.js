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
    }
  },
  plugins: [],
}

