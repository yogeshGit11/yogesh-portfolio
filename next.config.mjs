/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  reactStrictMode: true,

  basePath: isProd ? '/yogesh-portfolio' : '',
  assetPrefix: isProd ? '/yogesh-portfolio/' : '',
}

export default nextConfig
