/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#0066cc',
          accent: '#3399ff',
          dark: '#1a1a1a',
        },
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          roboto: ['Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };