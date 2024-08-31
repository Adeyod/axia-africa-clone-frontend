/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#202054',
        secondary: '#f0b73f',
      },
      screens: {
        xs: '480px',
      },
      animation: {
        'bounce-slow': 'bounce 15s infinite',
      },
      fontFamily: {
        sans: ['sans-serif'],
      },
    },
  },
  plugins: [],
};
