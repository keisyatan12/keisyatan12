/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwind-components/*.{html,js}"],
  theme: {
    
    extend: {
      colors:{
        primary:'#ffffff',
        dark:'#020617',
        button:'#1d4ed8',
        button2:'#ffffff',
      },
      
    },
  },
  plugins: [],
}

