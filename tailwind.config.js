const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/shared/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/templates/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.625rem'
      },
      aspectRatio: {
        '1/1': '1 / 1',
        '2/1': '2 / 1',
        '3/2': '3 / 2',
        '4/3': '4 / 3',
        '5/4': '5 / 4',
        '16/9': '16 / 9',
        '1/2': '1 / 2',
        '2/3': '2 / 3',
        '3/4': '3 / 4',
        '4/5': '4 / 5',
        '9/16': '9 / 16'
      },
      blur: {
        xxs: '1px',
        xs: '2px'
      },
      opacity: {
        '85': '.85'
      },
      colors: { //Generated using https://www.color-name.com/
        // transparent: 'transparent',
        // current: 'currentColor',
        // 'eucalyptus': '#4EC9B0',            //green-ish
        'eucalyptus':
        {
          DEFAULT: '#4EC9B0',
          100: '#DCF3EF',
          200: '#B8E9DF',
          300: '#95DFD0',
          400: '#71D4C0',
          500: '#4EC9B0',
          600: '#58BAA6',
          700: '#62AC9D',
          800: '#6C9D93',
          900: '#71968E'
        },
        // 'carolina-blue': '#569CD6',         //blue-ish
        'carolina-blue':
        {
          DEFAULT: '#569CD6',
          100: '#DDEBF7',
          200: '#BBD7EF',
          300: '#9AC4E6',
          400: '#78B0DE',
          500: '#569CD6',
          600: '#5E96C5',
          700: '#6791B4',
          800: '#6F8BA2',
          900: '#788691'
        },
        // 'gainsboro': '#DCDCDC',             //white-ish
        'gainsboro':
        {
          DEFAULT: '#DCDCDC',
          100: '#F8F8F8',
          200: '#F1F1F1',
          300: '#EAEAEA',
          400: '#E3E3E3',
          500: '#DCDCDC',
          600: '#CACACA',
          700: '#B7B7B7',
          800: '#A5A5A5',
          900: '#929292'
        },
        'eerie-black': '#1E1E1E',           //black-ish
        'black-olive': '#3C3C3C',           //black-ish
        'dark-charcoal': '#333333',         //black-ish
        'quick-silver': '#A5A5A5',          //gray-ish
        'cookies-and-cream': '#DCDCAA',     //yellow-ish
        // 'winter-wizard': '#9CDCFE'          //blue-ish
        'winter-wizard':
        {
          DEFAULT: '#9CDCFE',
          100: '#EBF8FF',
          200: '#D7F1FF',
          300: '#C4EAFE',
          400: '#B0E3FE',
          500: '#9CDCFE',
          600: '#96CAE5',
          700: '#91B7CC',
          800: '#8BA5B2',
          900: '869299'
        }
      },
      gridTemplateColumns:{
        'header' : '1fr auto 1fr',
        'slideshow' : '1fr auto'
      },
      gridTemplateRows:{
        'slideshow' : 'auto 1fr'
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
