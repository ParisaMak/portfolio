
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        transitionTimingFunction: {
          'custom-ease': 'cubic-bezier(0.43, 0.13, 0.23, 0.96)',
        },
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'tektur': ["Tektur", 'serif'] 
      },
     colors:{
      "blue":'#1f47b9',
      "orange":"#ff5333",
      "gray":"#F3F3F3"
     },
    boxShadow: {
    '3xl': '8px 8px',
    '2xl': '4px 4px',
    },
    },
  },
  plugins: [
    require('tailwindcss-hero-patterns'),
    require('tailwind-scrollbar-hide')
  ],
}