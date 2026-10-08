/** @type {import('next').NextConfig} */

const API_URL = "http://fastapi:8080";

const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_URL}/api/:path*`,
      },
    ];
  },

  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;