/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        "light-gray": "#83888F",
        "light-cyan": "#0E8784",
        "dark-indigo": "#2C343E",
        "light-pink": "#FDD6BA",
      },
      backgroundImage: {
        "banner-mobile":
          "url('../assets/home/png/image-hero-mobile-coffeepress.jpg')",
        "banner-desktop":
          "url('../assets/home/png/image-hero-coffeepress.jpg')",
        "banner-about-desktop":
          "url('../assets/about/png/image-header-coffeDesktop.jpg')",
        "banner-about-mobile":
          "url('../assets/about/png/image-header-coffeMovil.jpg')",
        "banner-about-tablet":
          "url('../assets/about/png/image-header-coffeTablet.jpg')",
        "barista-movil": "url('../assets/about/png/image-barista-movil.jpg')",
        "barista-tablet": "url('../assets/about/png/image-barista-tablet.jpg')",
        "barista-desktop":
          "url('../assets/about/png/image-barista-desktop.jpg')",
        "coffeHand-movil":
          "url('../assets/about/png/image-coffeHand-movil.jpg')",
        "coffeHand-tablet":
          "url('../assets/about/png/image-coffeHand-tablet.jpg')",
        "coffeHand-desktop":
          "url('../assets/about/png/image-coffeHand-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
