/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}' ,
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily : {
        "Roboto" : "Roboto",
        "Dim" : "Dim"
      },
      screens : {
        desktop : '1440px',
        laptop : '1024px',
        tablet : '768px',
        mobile : '550px'
      }
    },  
  },
  plugins: [
    function ({addVariant}) {
      addVariant('child' , '& > *'); 
      addVariant('child-hover' , '& > *:hover');
     },
     //require('flowbite/plugin')
  ],
}

