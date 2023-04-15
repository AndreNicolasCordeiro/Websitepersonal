import { AppProps } from 'next/app'
import Head from 'next/head'
import { GoogleFonts } from 'next-google-fonts'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" />
      <Component {...pageProps} />
    </>
  )
}

export default App
