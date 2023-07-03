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
        'thirdBlack': '#545454',
        'secondary': '#FDC55E',
        'darkModeBlack': '#0D0D0D',
      },
      backgroundImage: {
        'headerBg': 'linear-gradient(180deg, rgba(245, 71, 72, 0.06) 0%, rgba(245, 71, 72, 0.00) 100%)',
        'cardBg': 'linear-gradient(179deg, rgba(255, 255, 255, 0.00) 40%, rgb(245, 71, 72, 0.3) 100%);',
        'darkmodeCardBg': 'linear-gradient(179deg, rgba(255, 255, 255, 0.00) 20%, rgb(245, 71, 72, 0.3) 100%);',
        'cardEllipseBg': 'linear-gradient(rgba(245, 71, 72, 0.00) 60%, rgb(245, 71, 72, 0.5), rgb(253, 197, 94, 0.5))',
        'lastSectionBg': 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgb(253, 197, 94, 0.1) 100%);',
        'loginBg': 'url("assests/images/yellowFood.jpg")'
      },
      borderRadius: {
        'large': '6.25rem',
        'micro': '36px',
        'mini': '20px'
      },
      fontSize: {
        '4.5xl': '44px'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      rotate: {
        '17.5': '178.687deg'
      },
      screens: {
        'xlg': '1120px',
        'xsm': '440px'
      },
      spacing: {
        '68': '268px'
      }
    },
  },
  plugins: [],
}

