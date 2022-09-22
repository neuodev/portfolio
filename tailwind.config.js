/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#2196F3",
        menuColor: "#1d1d27",
        menuIcon: "#1d1d27",
        deriveIcon: "#f54888",
        stackIcon: "#4343f5",
      },
    },
  },
  plugins: [],
};
