/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "green-white": "#B7EFC5",
      "green-apple": "#92E6A7",
      "green-light": "#6EDE8A",
      "green-semi": "#13ce66",
      green: "#25A244",
      "green-gray": "#1A7431",
      "green-dark": "#10451D",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "dark-gray": "#495057",
      dark: "#1f1f1f",
      "white-gray": "rgb(236, 236, 236)",
      white: "#f1f1f1",
      transparent: "rgba(236, 236, 236, 0)",
    },
  },
  plugins: [],
};
