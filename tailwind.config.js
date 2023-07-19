/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  
  theme: {
    extend: {
      screens:{
        "md":"630px"
      }
    },
  },
  plugins: [],
}