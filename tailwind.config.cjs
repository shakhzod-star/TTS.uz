/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        light: ["Light", ...defaultTheme.fontFamily.sans],
        regular: ["Regular", ...defaultTheme.fontFamily.sans],
        meduim: ["Medium", ...defaultTheme.fontFamily.sans],
        semibold: ["Semibold", ...defaultTheme.fontFamily.sans],
        bold: ["Bold", ...defaultTheme.fontFamily.sans],
        extrabold: ["ExtraBold", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        littleBlue: "#51CCF3",
        gradientRed: "#FB4C59",
        darkBlue: "#170F49",
      },
    },
  },
  plugins: [],
};
