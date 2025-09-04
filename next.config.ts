import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false, // sembunyikan header "X-Powered-By"
  images: {
    formats: ['image/avif', 'image/webp'] // format modern
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
};

export default nextConfig;
