/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'btn-blue': '#5148d7',
        white: '#FFFFFF',
        grey: '#1d2939',
        'dark-blue': '#3A00B7',
        black: '#000000',
        'btn-blue': '#5148d7',
        'infra-yellow': '#eab308',
        'plat-yellow': '#ebb305'
      },
      boxShadow: {
        custom: '0 0 10px rgba(66,24,209,.2)',
        'custom-lite': '0 0 2px rgba(66,24,209,.2)'
      }
    }
  },
  plugins: []
};
