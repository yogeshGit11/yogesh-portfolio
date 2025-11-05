/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactStrictMode: true,

  // 👇 Add these two lines:
  basePath: '/yogesh-portfolio',
  assetPrefix: '/yogesh-portfolio/',
}
export default nextConfig
