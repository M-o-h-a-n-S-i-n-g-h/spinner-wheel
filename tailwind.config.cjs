/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '750px',
      lg: '1024px',
      xl: '1280px'
    },
    colors: {
      white: '#fff',
      black: '#000',
      lightGreen: '#C5EFC8',
      darkGreen: '#146531',
      bgGray: 'rgba(20, 20, 20, 0.2)',
      borderRed: '#FF0000'
    },
    textColor: {
      white: '#fff',
      gray: {
        400: '#A0AEC0',
        500: '#718096',
        600: '#4A5568',
        700: '#2D3748'
      },
      red: '#FF0000',
      black: '#000'
    },
    extend: {}
  },
  plugins: []
}
