/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactStrictMode: true,

  basePath: isProd ? '/yogesh-portfolio' : '',
  assetPrefix: isProd ? '/yogesh-portfolio/' : '',
}

export default nextConfig
