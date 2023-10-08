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
    },
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto", //for sidebar layout
      },
      gridTemplateRows: {
        header: "64px auto", //for the navbar layout
      },
    },
  },

};
