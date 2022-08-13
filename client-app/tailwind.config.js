/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,jsx,ts,tsx}", "./components/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        128: '40rem'
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))'
      },
    },
    fontFamily: {
      raleway: ["Raleway", "san-refif"]
    }
  },
  plugins: [],
}
