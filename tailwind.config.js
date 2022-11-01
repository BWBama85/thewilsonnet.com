/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/daisyui/dist/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
