module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['Righteous', 'cursive'],
        'sans': ['Quicksand', 'sans-serif'],
      },
      transitionProperty: {
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
} 