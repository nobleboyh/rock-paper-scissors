module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-rbga': 'rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        scissors: 'radial-gradient(at top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        rock: 'radial-gradient(at top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        paper: 'radial-gradient(at top,hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
      },
    },
  },
  plugins: [],
};
