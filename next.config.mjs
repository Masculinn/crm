/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  distDir: "out",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};
export default nextConfig;
