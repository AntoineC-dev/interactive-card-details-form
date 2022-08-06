/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  colors: {
    transparent: "transparent",
    current: "currentColor",
    primary: {
      purple: "hsl(278, 94%, 30%)",
      blue: "hsl(249, 99%, 64%)",
      red: "hsl(0, 100%, 66%)",
    },
    neutral: {
      white: "hsl(0, 0%, 100%)",
      "light-gray": "hsl(270, 3%, 87%)",
      "dark-gray": "hsl(279, 6%, 55%)",
      purple: "hsl(278, 68%, 11%)",
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space\\ Grotesk", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
