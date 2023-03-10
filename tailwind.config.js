/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/daisyui/dist/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['business'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    // darkTheme: 'business',
  },
};
