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
        },
        'Icon-CPP' : '#00599C',
        'Icon-CSharp' : '#239120',
        'Icon-Java' : '#007396',
        'Icon-Javascript' : '#f7df1e',
        'Icon-HTML5' : '#e34f26',
        'Icon-CSS3' : '#1572b6',
        'Icon-VisualStudio' : '#5c2d91',
        'Icon-VisualStudio-Code' : '#007acc',
        'Icon-CMake' :
        {
          'Part-1' : '#07508c',
          'Part-2' : '#bd212a',
          'Part-3' : '#209849',
          'Part-4' : '#cccccd'
        },
        'Icon-Jenkins':
        {
          'Part-1' : '#d33833',
          'Part-2' : '#ef3d3a',
          'Part-3' : '#231f20',
          'Part-4' : '#6d6b6d',
          'Part-5' : '#dcd9d8',
          'Part-6' : '#ffffff',
          'Part-7' : '#81b0c4',
          'Part-8' : '#335061',
          'Part-9' : '#49728b',
          'Part-10' : '#f0d6b7',
          'Part-11' : '#221e1e'
        },
        'Icon-Github-Actions' : '#2088ff',
        'Icon-UnrealEngine' : '#0e1128',
        'Icon-Git' : '#f05032',
        'Icon-Github' : '#181717',
        'Icon-Gitkraken' : '#179287',
        'Icon-Perforce' : '#404040',
        'Icon-Jira' : '#0052cc',
        'Icon-Trello' : '#0052cc',
        'Icon-Toggl' : '#e57cd8',
        'Icon-Microsoft-Teams' : '#6264a7',
        'Icon-Slack' : 
        {
          'Part-1' : '#e01e5a',
          'Part-2' : '#36c5f0',
          'Part-3' : '#2eb67d',
          'Part-4' : '#ecb22e'
        },
        'Icon-Discord' : '#5865f2',
        'Icon-DX11' : '#1ca813',
        'Icon-DX12' : '#1ca813',
        'Icon-OpenGL' : '#5586a4',
        'Icon-OpenGL-ES' : '#ba2a8d',
        'Icon-Optix' : '#76b900',
        'Icon-CUDA' : '#76b900',
        'Icon-SDL2' : '#103255',
        'Icon-React' : '#61dafb',
        'Icon-NodeJS' : '#339933',
        'Icon-GLTF' : '#86c540',
        'Icon-JSON' : '#000000',
        'Icon-Windows' : '#0078d6',
        'Icon-RaspberryPi' :
        {
          'Part-1' : '#75a928',
          'Part-2' : '#bc1142',
          'Part-3' : '#000000'
        },
        'Icon-Oculus' : '#1c1e20',
        'Icon-Vive' : '#00bae5',
        'IconColor' : 'rgb(var(--IconColor))'
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
