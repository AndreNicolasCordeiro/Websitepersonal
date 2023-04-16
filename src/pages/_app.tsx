import { AppProps } from 'next/app'
import Head from 'next/head'
import { GoogleFonts } from 'next-google-fonts'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>André Cordeiro - Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/img/iconweb2.png" />
        <link rel="apple-touch-icon" href="/img/iconweb2.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f1f1f" />
        <meta
          name="André Cordeiro - Programador e Design | Portfólio"
          content="Conheça o portfólio de André Cordeiro, um programador e designer com habilidades em desenvolvimento web, design e manipulação de imagens."
        />
        <link rel="canonical" href="URL_canônica_da_página"></link>
        <meta
          name="keywords"
          content="Programação, Design, Manipulação, Imagens, UI, UX, Portfólio, Web, WebDesign, Programador, Designer"
        ></meta>
        <meta name="robots" content="index, follow" />
      </Head>
      <GlobalStyles />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" />
      <Component {...pageProps} />
    </>
  )
}

export default App
