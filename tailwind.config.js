/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primaryBack': '#f5f5f5',
      },
      width:{
        'pageMax-width': '1540px',
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
