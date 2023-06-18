/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#0a4d47',
        secondary: '#5fa9ac',
        info: '#329cac',
        light: '#afebd1',
        dark: '#050002',
        success: '#12b64b',
        warning: '#f4cb11',
        danger: '#f3375e'
      }
    },
  },
  plugins: [],
}
