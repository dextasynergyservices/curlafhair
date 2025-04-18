/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/**/*.html", // if using plain HTML
    "./frontend/**/*.js", // if your JS has Tailwind classes
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
