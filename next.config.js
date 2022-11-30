/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-EN', 'fr-FR'],
    defaultLocale: 'en-EN'
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
