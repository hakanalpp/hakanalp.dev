module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'neutral-white': '#E9E9ED'
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
