/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "th-primary": "#154FA2",
        "th-secondary": "#99F3CF",
        "th-grey": "#F0F0F0",
        "th-bg-dark": "#002041"
      },
      backgroundImage: {
        'header': "url('assets/header-bg.jpg')",
        'header-sm': "url('assets/header-bg-sm.jpg')",
        'service1': "url('assets/service1.jpg')",
        'service2': "url('assets/service2.jpg')",
        'service3': "url('assets/service3.jpg')",
        'service4': "url('assets/service4.jpg')",
        'service5': "url('assets/service5.jpg')",
        'service6': "url('assets/service6.jpg')",
      },
    },
  },
  plugins: [],
}