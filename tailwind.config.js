module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-yellow': '#c9bc7e',
        'main-dark': '#333133',
        'neutral-white': '#dbdbdb'
      }
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Arvo', 'serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
