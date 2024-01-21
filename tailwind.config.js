/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        60: 'rgba(156, 164, 171, 1)',
        'alertError': 'rgba(237, 84, 78, 1)',
        'alertSuccess': 'rgba(102, 200, 123, 1)',
        'green': 'rgba(52, 202, 165, 1)',
        'unselected': 'rgba(13, 6, 45, 1)',
        'main-sec': {
          1: 'rgba(226, 166, 64, 1)',
          2: 'rgba(13, 6, 45, 1)',
          3: 'rgba(226, 166, 64, 1)',
          4: 'rgba(13, 6, 45, 1)'
        }
      },
    },
  },
  plugins: [],
};
