const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/shared/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'eucalyptus': '#4EC9B0',            //green-ish
        'carolina-blue': '#569CD6',         //blue-ish
        'gainsboro': '#DCDCDC',             //white-ish
        'eerie-black': '#1E1E1E',           //black-ish
        'black-olive': '#3C3C3C',           //black-ish
        'dark-charcoal': '#333333',         //black-ish
        'quick-silver': '#A5A5A5',          //gray-ish
        'cookies-and-cream': '#DCDCAA',     //yellow-ish
        'winter-wizard': '#9CDCFE'          //blue-ish
      },
      gridTemplateColumns:{
        'header' : '1fr auto 1fr'
      },
      fontFamily: {
        'sans' : ['Roboto', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    plugin(
      function({addVariant})
        { 
          addVariant('any-hover', '@media (any-hover: hover)')
          addVariant('no-hover', '@media (any-hover: none)')
        }
      )
  ],
}
