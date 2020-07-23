// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        'SA-blue': '#125592',
        'SA-red': '#c35b48',
        'SA-green': '#458962',
        'SA-yellow': '#e5c027',
      },
      spacing: {
        '80': '20rem',
        '96': '24rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
}
