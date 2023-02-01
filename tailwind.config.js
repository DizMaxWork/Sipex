/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1440px'
    },

    colors: {
      'transparent': 'transparent',
      'main': '#3D3C41',
      'white': '#FFFFFF',
      'black': '#000000',
      'gray': '#F2F2F2',
      'F9': '#F9F9F9',
      '37': '#373737',
      'orange': '#FF8A00',
      '33': '#333333',
      '3A': '#3A3A3A',
      'EF': '#EFEFEF',
      '1C': '#1C1C1E',
      '6F': '#6F6F6F',
      'C0': '#C0C0C0',
      '83': '#838383',
      'A4': '#A4A4A4',
      'CD': '#CDCDCD',
      '8A': '#8A8A8A',
      'FF8': '#FF8A00',
      '87': '#878787',
      '73': '#737373'

    },

  plugins: [],
}
}

