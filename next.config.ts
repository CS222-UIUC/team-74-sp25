import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/TEAM-74-SP25' : '',
  images: {
    domains: ['m.media-amazon.com'],
    unoptimized: true, 
  },
};

export default nextConfig;