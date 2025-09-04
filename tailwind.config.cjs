/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0A1B2E",
          blue2: "#0E3964",
          gold: "#D4AF37",
          gold2: "#CBA135",
          navy: "#081126",
          ink: "#0B132B"
        }
      },
      boxShadow: { card: "0 12px 40px rgba(10,37,64,0.4)" },
      borderRadius: { xl2: "1rem" }
    }
  },
  plugins: []
};