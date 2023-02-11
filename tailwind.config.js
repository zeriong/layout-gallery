/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
        "primary-light": "#f3f4ff"
      },
      width:{
        'pageMax': '1540px',
      },
      maxWidth:{
        'pageMax': '1540px',
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
