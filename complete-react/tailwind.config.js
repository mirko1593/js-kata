/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,css,ts,hs,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
