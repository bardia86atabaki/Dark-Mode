module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        lePeek: 'lePeek 1s ease-in-out infinite',
        leFadeIn: 'leFadeIn 5s ease-in-out forwards ',
        leAboundTop: 'leAboundTop 1s ease-in-out forwards infinite',        
      },
      keyframes: {
        lePeek: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },    
        blinkCaret: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
          '100%': { borderColor: 'transparent' },
        },
        leFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        leAboundTop: {
          '0%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
