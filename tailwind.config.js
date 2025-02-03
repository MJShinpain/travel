/* eslint-disable global-require */

module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'halloween'
    ]
  }
}
