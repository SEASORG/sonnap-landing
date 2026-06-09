/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/sonnap-landing',
  assetPrefix: '/sonnap-landing/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
