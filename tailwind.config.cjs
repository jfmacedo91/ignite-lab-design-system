/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      'sm': '0.875rem',
      'default': '1rem',
      'md': '1.125rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '2rem'
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        100: '#E1E1E6',
        200: '#C4C4CC',
        400: '#7C7C8A',
        800: '#202024',
        900: '#121214'
      },
      cyan: {
        300: '#B2EBFF',
        500: '#81D8F7'
      },
      red: {
        300: '#FF8C8C'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Source Sans Pro, sans-serif'
      }
    },
  },
  plugins: [],
}
