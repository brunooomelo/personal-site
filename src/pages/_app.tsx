import '../styles/style.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>brunooomelo - JS DEVELOPER</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
