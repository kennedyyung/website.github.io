/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'base': '#fcfcfc',
      'nav': '#627c85',
      'dark_nav': '#9DD9EE',
      'button': '#FFC1CF',
      'dark_button': '#ED6887',
      'txt': '#67597A',
      'green-grey': '#35524a',
      'white': '#ffffff',
      'black': '#000000',
      'sidebar': '#8FB8DE',
      'input': '#efefef',
      'dark_base': '#1D2125',
      'dark_text': '#F7F8F9',
    },
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto", //for sidebar layout
      },
      gridTemplateRows: {
        header: "64px auto", //for the navbar layout
      },
      spacing: {
        '1': '8px', // 1 unit
        '2': '16px', // 2 units
        '3': '24px', // 3 units
        // Add more spacing values as needed
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
};
