import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/team-74-sp25' : '',
  images: {
    domains: ['m.media-amazon.com'],
    unoptimized: true, 
  },
};

export default nextConfig;