/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background': '#004643',
        'backgroundSecondary': '#abd1c6',
        'headline': '#fffffd',
        'headlineSecondary': '#001e1d',
        
        'buttonBackground': '#001e1d',
        'buttonText': '#001e1d',
        'accent': '#e16162',
        
        'cardHeading': '#004643',
        'cardText': '#001e1d',

        'connectPrimary': '#004643',
        'connectBackground': '#001e1d',

        'usercardPrimary': '#fffffd',
        'usercardBackground': '#001e1d',
      },
    },
  },
  plugins: []
};