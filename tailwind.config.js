/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
        founder: ["Space Grotesk", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },
      colors: {
        svgColor: "hsl(213,100%,61%)",
      },
      backgroundColor: {
        bg_main: "var(--color-bg-task)",
        svgColor: "hsl(213,100%,61%)",
      },
    },
  },
  plugins: [],
};
