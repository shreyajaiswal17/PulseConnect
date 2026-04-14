/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06A3DA',
        secondary: '#FE5D37',
        gov: {
          red: '#8B0000',
          redDark: '#6B0000',
          yellow: '#F5C400',
          grey: '#F0F2F5',
          panel: '#F8F9FA',
          border: '#C4C4C4',
          text: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['Roboto', 'Open Sans', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
