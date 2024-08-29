/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A1828",
        secondary: "#178582",
        tertiary: "#BFA181",
      },
    },
    screens: {
      lg: { max: "1023px" },
      sm: { max: "1000px" },
    },
  },
  plugins: [],
};
