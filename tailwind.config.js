module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        header: '#7EB5A6',
        body: '#E8D0B3',
        logo: '#86340A',
        btn: '#C36839',
      },
    },
  },
  plugins: [],
};
