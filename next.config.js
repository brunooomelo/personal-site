const withPWA = require('next-pwa')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
const isProd = process.env.NODE_ENV === 'production'

module.exports = withMDX(
  withPWA({
    pageExtensions: ['tsx', 'ts', 'md', 'mdx'],
    i18n: {
      locales: ['en-us', 'pt-br'],
      defaultLocale: 'pt-br',
    },
    async rewrites() {
      return [
        {
          source: '/en-us',
          destination: '/en',
          locale: false,
        },
        {
          source: '/pt-br',
          destination: '/',
          locale: false,
        },
      ]
    },
    pwa: {
      dest: 'public',
      disable: !isProd,
    },
    images: {
      domains: ['localhost', 'brunooomelo.com'],
    },
    webpack5: true,
    env: {
      PREVIEW: process.env.PREVIEW,
    },
  })
)
