import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
            <link rel="icon" type="image/x-icon" href="/media/favicon.ico"/>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}