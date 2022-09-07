const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../api.bitcamp.ge/views/**/*.{html,js,mst}"],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        bitcamp: '#262A43',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
