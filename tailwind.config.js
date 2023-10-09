/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'base': '#f0f7f4',
      'outline': '#627c85',
      'button': '#c5979d',
      'txt': '#6699cc',
      'green-grey': '#35524a',
      'white': '#ffffff',
      'black': '#000000'
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
