/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",   // Add this
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      colors: {
        deepBlue: "[#02040a]",
        lightBlue: "[#2b84ea]",
        lightBlue300: "[#4b94ed]",
        lightBlue500: "[#0b72e7]",
        greenLight: "[#61cea6]",
        grayText: "[#818597]",
        lightGray: "[#e2e2e2]",
        grayBlue: "[#344a6c]",
        deepBlueHead: "[#162f56]",
        gray2: "[#525a66]",
      },
    },
  },
  plugins: [],
};
