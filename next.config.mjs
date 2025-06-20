/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  // assetPrefix debe empezar con '/' para compatibilidad con next/font
  assetPrefix: '/',
  trailingSlash: true,
}

export default nextConfig
