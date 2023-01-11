/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        littleBlue: "#51CCF3",
        gradientRed: "#FB4C59",
        darkBlue: "#170F49",
      },
    },
  },
  plugins: [],
};
