import '../styles/globals.css'
import '../styles/style.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Inspect from 'inspx'
import { ThemeProvider } from '../context/ThemeProvider'

const isPreview = process.env.PREVIEW == 'true'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Inspect disabled={!isPreview}>
      <Head>
        <title>brunooomelo - JS DEVELOPER</title>
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
    </Inspect>
  )
}

export default MyApp
