/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1020px",
      xl: "1440px"
    },
    extend: {
      colors: {
        Yellow: "hsl(47, 88%, 63%)",
        White: "hsl(0, 0%, 100%)",
        Gray: "hsl(0, 0%, 50%)",
        Black: "hsl(0, 0%, 7%)"
      },
      fontFamily: {
        sans: ["Fitgree", "sans-serif"]
      }
    }
  },
  plugins: []
};

