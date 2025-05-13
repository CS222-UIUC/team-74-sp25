import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['m.media-amazon.com', 'a.media-amazon.com'],
  },
  trailingSlash: true,
};

export default nextConfig;