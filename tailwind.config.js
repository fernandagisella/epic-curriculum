/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        gothic: ["var(--font-cinzel)", "serif"],
        medieval: ["var(--font-garamond)", "serif"],
      },
    },
  },
  plugins: [],
};
