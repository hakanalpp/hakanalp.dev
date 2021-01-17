module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Varela Round', 'sans-serif']
    },
    colors: {
      'dark-green': '#164A41',
      'light-green': '#9DC88D',
      'light-yellow': '#F1B24A',
      'neutral-white': '#E9E9ED'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
