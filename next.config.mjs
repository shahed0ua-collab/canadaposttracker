/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  // Optimize for Vercel free tier
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  swcMinify: true,
  // Enable static optimization
  staticPageGenerationTimeout: 60,
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
