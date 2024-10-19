/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily : {
        "Roboto" : "Roboto"
      },
      screens : {
        desktop : '1440px',
        laptop : '1024px',
        tablet : '768px'
      }
    },
  },
  plugins: [
    function ({addVariant}) {
      addVariant('child' , '& > *'); 
      addVariant('child-hover' , '& > *:hover');
     },
  ],
}

