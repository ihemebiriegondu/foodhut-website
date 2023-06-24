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
      backgroundImage: {
        'headerBg': 'linear-gradient(180deg, rgba(245, 71, 72, 0.06) 0%, rgba(245, 71, 72, 0.00) 100%)',
      },
      borderRadius: {
        'large': '6.25rem'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      screens: {
        'xlg': '1120px'
      }
    },
  },
  plugins: [],
}

