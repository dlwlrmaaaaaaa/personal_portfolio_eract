/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#77F0A5",
        secondary: "#f1c40f",
        dark: "#2c3e50",
        light: "#ecf0f1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
  },
  plugins: [],
} }

