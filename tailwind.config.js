/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      charcoal: "#1E1E1E",
      cherry: "#C1043F",
      steel: "#E5E9EE",
    },
    fontFamily: {
      serif: ["Montserrat"],
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-steel-glow": {
          textShadow: "rgb(229, 233, 238, 0.9) 0px 0px 39px",
        },
      })
    },
  ],
}
