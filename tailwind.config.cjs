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

        'buttonBackground': '#f8bb60',
        'buttonBackgroundHover': '#f2cb99',
        'buttonText': '#fffffd',
        'accent': '#e16162',

        'cardHeading': '#004643',
        'cardText': '#001e1d',

        'connectPrimary': '#fffffd',
        'connectBackground': '#f8bb60',

        'usercardPrimary': '#fffffd',
        'usercardBackground': '#001e1d',

        'loginCardBackground': '#e8e4e6',
        'loginCardBorder': '#001e1d',
        'loginCardText': '#001e1d',
      },
    },
  },
  plugins: []
};