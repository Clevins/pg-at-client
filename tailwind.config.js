module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        cloudBurst: '#393E46',
        thunder: '#464645',
        darkTurquoise: '#08D9D6',
        irisBlue: '#00ADB5',
        Whisper: '#E5E5E5',
        bunker: '#222831',
      },
      fontFamily: {
        Montserrat: 'Montserrat',
      },
      textShadow: {
        default: '2px 2px 2px rgba(0, 0, 0, 0.4)',
      },
      maxWidth: {
        250: '68rem', //1000px
        192: '48rem', //768rem
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
