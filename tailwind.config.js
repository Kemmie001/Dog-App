/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CC8F56",
        secondary: "#51e1a7",
        light: "#FDFDFD",
        dark: "#333333",
        "dark-light": "#323259",
        neutral: "#828282",
        "neutral-border": "#DFDFDF",
        "neutral-bg": "#F2F2F2",
      },
    },
  },
  plugins: [],
};
