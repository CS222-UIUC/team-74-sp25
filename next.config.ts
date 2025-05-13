import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  images: {
    domains: ['m.media-amazon.com'],
    unoptimized: true,
  },
};

export default nextConfig;