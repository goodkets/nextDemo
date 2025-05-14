import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-left' 
  },
  images: {
    domains: ['df5apg8r0m634.cloudfront.net'], // 允许加载的图片域名
  },
  reactStrictMode: false
};

export default nextConfig;