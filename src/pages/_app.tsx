import '../styles/style.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>brunooomelo - JS DEVELOPER</title>
        <link rel="shortcut icon" href="/image/icon-512.png" />
        <link rel="apple-touch-icon" href="/image/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#121212" />
        <meta name="description" content="The best Game Store in the world!" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
