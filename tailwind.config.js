/** @type {import('tailwindcss').Config} */
const createPxEntries = (size) => {
  return {...Array.from(Array(size + 1)).reduce((accumulator, _, i) => {
      return {...accumulator, [`${i}px`]: `${i}px` }
    })
  };
}
const createRemEntries = (size) => {
  return {...Array.from(Array(size + 1)).reduce((accumulator, _, i) => {
      return {...accumulator, [i]: `${i * 0.0625}rem` }
    })
  };
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "m-sm" : "365px",
      },
      fontSize: {...createPxEntries(100), ...createRemEntries(100)},
      /*fontSize: {
        "32px" : "2rem",
        "28px" : "1.750rem",
        "10px" : "0.625rem",
      },*/
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
        "crypto-light-grey": "#1E252D",
        "crypto-white": "#ffffff",
        "crypto-cool-grey": "#a7afb7",
        "crypto-dark-two": "#161c22",
        "crypto-warm-grey": "#777777",
        "crypto-silver": "#c1c7cd",
        "crypto-dark-three": "#171d22",
        "crypto-ball-dark": "#252e35",
      },
      width:{
        'pageMax': '1540px',
      },
      height:{
        'header-height' : '116px',
      },
      padding:{
        'header-height' : '116px',
      },
      spacing: {...createPxEntries(200), ...createRemEntries(200)},
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
