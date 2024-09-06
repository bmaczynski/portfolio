/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#383C4A",
        darker: "#2F343F",
        darkest: "#2A2E38",
      },
    },
  },
  plugins: [],
};
