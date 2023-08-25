/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-meganta":"#020021", 
        "primary-Bright-Purple": "#5D13F9",
        "White": "#FFFFFF",
        "primary-text":"#e14eca",
    
      },
      fontFamily:{
        "display":" Poppins, sans-serif",
      },
      backgroundColor:{
        "opacity-top": "linear-gradient(45deg, #5D13F9, #e14eca)"  
      
      }
    },
  },
  plugins: [],
}

/* --opacity-bottom: linear-gradient(
            180deg,
            rgba(4, 21, 45, 0) 0%,
            #04152d 79.17%
        );
        --opacity-details: linear-gradient(
            180deg,
            rgba(4, 21, 45, 0) -400%,
            #04152d 99.17%
        );
        --opacity-top: linear-gradient(
            180deg,
            rgba(4, 21, 45, 0) 0%,
            #04152d 100%
        ); */