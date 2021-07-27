import '../styles/style.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Inspect from 'inspx'
import { MDXProvider } from '@mdx-js/react'

const isPreview = process.env.PREVIEW == 'true'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Inspect disabled={!isPreview}>
      <MDXProvider>
        <Head>
          <title>brunooomelo - JS DEVELOPER</title>
          <link rel="shortcut icon" href="/image/icon-512.png" />
          <link rel="apple-touch-icon" href="/image/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#121212" />
          <meta
            name="description"
            content="The best Game Store in the world!"
          />
        </Head>
        <Component {...pageProps} />
      </MDXProvider>
    </Inspect>
  )
}

export default MyApp
