/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        'col-1': '0 0 8.3333333333%',
        'col-2': '0 0 16.6666666667%',
        'col-3': '0 0 25%',
        'col-4': '0 0 33.3333333333%',
        'col-5': '0 0 41.6666666667%',
        'col-6': '0 0 50%',
        'col-7': '0 0 58.3333333333%',
        'col-8': '0 0 66.6666666667%',
        'col-9': '0 0 75%',
        'col-10': '0 0 83.3333333333%',
        'col-11': '0 0 91.6666666667%',
        'col-12': '0 0 100%',
      },
      boxShadow:{
        'login-home-nigiri': '0 -30px 50px -20px rgb(0 0 0 / 0.25)',
        'login-home-roll': '-30px 30px 50px -20px rgb(0 0 0 / 0.25)',
      },
      colors:{
        'landingBack': '#f5f5f5',
        "neutral-white": "#ffffff",
        "secondary-light": "#fff3ed",
        "neutral-gray": "#83859c",
        "neutral-black": "#2b2b43",
        "primary-default": "#4e60ff",
        "primary-hover": "#697bff",
        "primary-lightest": "#f8f9ff",
        "neutral-gray-light": "#c7c8d2",
        "neutral-gray-lightest": "#edeef2",
        "black-100": "#25282b",
        "error-default": "#ff5c60",
        "secondary-default": "#fd6d22",
        "neutral-gray-dark": "#545563",
        "primary-light": "#f3f4ff",

        "crypto-dark": "#1b232a",
        "crypto-seafoam-blue": "#5ed5a8",
        "crypto-pale-red": "#dd4b4b",
        "crypto-pale-grey": "#f1f4f6",
        "crypto-white": "#ffffff",
        "crypto-cool-grey": "#a7afb7",
        "crypto-dark-two": "#161c22",
        "crypto-warm-grey": "#777777",
        "crypto-silver": "#c1c7cd",
        "crypto-dark-three": "#171d22"
      },
      width:{
        'pageMax': '1540px',
      },
      maxWidth:{
        'pageMax': '1540px',
        'col-1': '8.3333333333%',
        'col-2': '16.6666666667%',
        'col-3': '25%',
        'col-4': '33.3333333333%',
        'col-5': '41.6666666667%',
        'col-6': '50%',
        'col-7': '58.3333333333%',
        'col-8': '66.6666666667%',
        'col-9': '75%',
        'col-10': '83.3333333333%',
        'col-11': '91.6666666667%',
        'col-12': '100%',
      },
      height:{
        'header-height' : '116px',
      },
      padding:{
        'header-height' : '116px',
      },
      spacing: {
        'header-height' : '116px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
