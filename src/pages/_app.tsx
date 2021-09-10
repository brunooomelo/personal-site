import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from '../context/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>brunooomelo</title>
        <link rel="shortcut icon" href="/image/icon-512.png" />
        <link rel="apple-touch-icon" href="/image/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#121212" />
        <meta
          name="description"
          content="The best personal portfolio in the world!"
        />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
