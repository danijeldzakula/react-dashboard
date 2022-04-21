module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          'from': { filter: 'blur(0px)' },
          'to': { filter: 'blur(4px)' },
        }
      },  
      animation: {
        blur: 'blur 3s linear infinite',
      },
      screens: {
        'max-2xl': {'max': '1535px'},
        'max-xl': {'max': '1279px'},
        'max-lg': {'max': '1023px'},
        'max-md': {'max': '767px'},
        'max-sm': {'max': '639px'},
      },
    },
  },
  plugins: [],
}
