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
        primary: '#bb372f',
        secondary: '#3a3f51',
        'success': '#00ac56',
        'error': '#ff1f7d',
        'warning': '#f5bf3d',
        neutral: {
          'white': '#ffffff',
          'background': '#fdfdfd'
        },
        grayscale: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#b2abab',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans", sans-serif'],
      },
      // fontSize: {
      //   'xs': '0.75rem',
      //   '2xl': '2rem',  
      //   '4xl': '3.5rem',  
      // },
    },
  },
  plugins: [],
};
