import "../styles/global.css"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

//https://fontawesome.com/docs/apis/javascript/configuration
//https://fontawesome.com/docs/web/use-with/react/use-with

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App