/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        gothic: ["var(--font-cinzel)", "serif"],
        medieval: ["var(--font-garamond)", "serif"],
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 16px rgba(245, 158, 11, 0.45))",
            opacity: "0.85",
          },
          "50%": {
            filter: "drop-shadow(0 0 38px rgba(252, 211, 77, 0.9))",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
