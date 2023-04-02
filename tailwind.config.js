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
        'gall-gray-100': '#323232',
        'gall-gray-200': '#262626',
        'gall-gray-300': '#1e1e1e',
        'gall-header-title-gray': '#f7f7f7',
        'gall-title-gray': '#d5d5d5',
        'gall-cate-gray': '#e0e0e0',
        'gall-desc-gray': '#aaaaaa',
        'gall-temple-gray': '#cecece',
        'gall-link-blue': '#71c2ff',

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
        "crypto-light-grey": "#21282f",
        "crypto-white": "#ffffff",
        "crypto-cool-grey": "#a7afb7",
        "crypto-dark-two": "#161c22",
        "crypto-warm-grey": "#777777",
        "crypto-silver": "#c1c7cd",
        "crypto-dark-three": "#171d22",
        "crypto-dark-four": "#1e272e",
        "crypto-dark-five": "#2E373E",
        "crypto-ball-dark": "#252e35",
      },
      height:{
        'header-height' : '116px',
      },
      padding:{
        'header-height' : '116px',
      },
      spacing: {...createPxEntries(100), ...createRemEntries(100)},
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
