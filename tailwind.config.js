/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      objectPosition: {
        "honamiPosition": "25%",
        "sakiPosition": "35%",
        "shihoGuitarPosition": "75%",
        "honamiDrumPosition": "30%",
      },
      boxShadow: {
        "cardArtist": "5px 4px 10px 3px rgba(0, 0, 0, 0.38)",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        gothic: ["Gothic A1", "sans-serif"],
        vastShadow: ["Vast Shadow", "sans-serif"]
      }
    },
  },
  plugins: [],
}

