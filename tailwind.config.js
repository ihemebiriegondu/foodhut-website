/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F54748',
        'firstBlack': '#191919',
        'secondBlack': '#2E2E2E',
        'secondary': '#FDC55E'
      },
      borderRadius: {
        'large': '6.25rem'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

