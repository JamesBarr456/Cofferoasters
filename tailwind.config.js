/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'barlow': ['Barlow', 'serif'],
        'fraunces': ['Fraunces', 'serif']
      },
      colors: {
        'light-gray': '#83888F',
        'light-cyan': '#0E8784',
        'dark-indigo':'#2C343E',
        'light-pink': '#FDD6BA'
      },
      backgroundImage:{
        'banner-mobile': "url('../assets/home/png/image-hero-mobile-coffeepress.jpg')",
        'banner-desktop': "url('../assets/home/png/image-hero-coffeepress.jpg')"
      }
    },
  },
  plugins: [],
}

