module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'SA-blue': '#125592',
        'SA-red': '#c35b48',
        'SA-green': '#458962',
        'SA-yellow': '#e5c027',
      },
      spacing: {
        30: '7rem',
        80: '20rem',
        112: '30rem',
        128: '32rem',
      },
      borderWidth: {
        default: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
        16: '16px',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
