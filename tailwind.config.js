/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // <-- TAMBAHKAN INI
  theme: {
    extend: {
      zIndex:{
        '60': '60',
        '70': '70',
        '80': '80',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      transitionProperty: {
        'height': 'height',
        'opacity': 'opacity'
      },
    },
  },
  plugins: [],
}
