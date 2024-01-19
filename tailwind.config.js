/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "fuchsia": "#8B007D",
      "neutral": "#E7E7E7",
      "background": "#FAFAFA",
      "white": "#FFFFFF",
      "black": "#000000",
      "yellow": "#FFB800"
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '821px',
      'lg': '1100px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

