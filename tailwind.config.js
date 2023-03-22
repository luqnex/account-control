/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        "black-01": "#121212",
        "black-02": "#181818",
        "black-03": "#0F0F0F",
        gray: "#AAAAAA",
        blue: "#2D27FF",
        green: "#4CAF50",
        red: "#FF0000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
