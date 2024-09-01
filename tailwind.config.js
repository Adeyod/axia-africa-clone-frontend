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
        ls: '900px',
        xs: '480px',
        ms: '220px',
      },
      animation: {
        'bounce-slow': 'bounce 15s infinite',
        'bounce-medium': 'bounce 5s infinite',
      },
      fontFamily: {
        sans: ['sans-serif'],
      },
    },
  },
  plugins: [],
};
