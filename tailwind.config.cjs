/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { "space-mono": ["space mono"] },
      colors: {
        "primary": "hsl(172, 67%, 45%)",
        "dark-cyan": "hsl(183, 100%, 15%)",
        "dark-gr-cyan": "hsl(186, 14%, 43%)",
        "gr-cyan": "hsl(184, 14%, 56%)",
        "light-cyan": "hsl(185, 41%, 84%)",
        "light-gr-cyan": "hsl(189, 41%, 97%)",
      }
    },
  },
  plugins: [],
}
