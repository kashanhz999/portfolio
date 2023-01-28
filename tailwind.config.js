/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
          s:{
              words: ['Software Engineering Student.','Programmer','Web Developer'],
              delay: 2,
              writeSpeed:0.2   
            }
      }
  })
  ],
};
