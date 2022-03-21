module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        header: '#E4AEC5',
        body: '#FAD9E6',
        logo: '#5F7464',
        btn: '#243D25',
      },
    },
  },
  plugins: [],
};
