import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-left' 
  },
  reactStrictMode: false
};

export default nextConfig;