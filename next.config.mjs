/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Keeps your images unoptimized
  },
  output: 'export', // Enable static export
  reactStrictMode: true, // Optional: Keeps React in strict mode
}

export default nextConfig
