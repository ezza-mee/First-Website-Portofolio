/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
        fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        },
    },
  },
  plugins: [],
}
