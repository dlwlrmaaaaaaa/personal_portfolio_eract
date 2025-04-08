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
        secondary: "#F8F8F8",
        dark: "#2c3e50",
        light: "#ecf0f1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      keyframes: {
        scrollBanner: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(50%)' }, // adjust based on content
        }
      },
      animation: {
        scrollBanner: 'scrollBanner 20s linear infinite',
      }
  },
  plugins: [],
} }

