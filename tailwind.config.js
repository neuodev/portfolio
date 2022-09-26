/** @type {import('tailwindcss').Config} */
const spaces = {
  100: 100,
  200: 200,
  300: 300,
  450: 450,
  500: 500,
  600: 600,
  700: 700,
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      spacing: spaces,
      minHeight: spaces,
    },
  },
  plugins: [],
};
