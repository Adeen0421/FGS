/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Configure Sanity Studio
  experimental: {
    appDir: true,
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    // Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
}

module.exports = nextConfig;