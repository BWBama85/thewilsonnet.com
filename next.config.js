/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages: ["react-daisyui"],
  },
};

module.exports = nextConfig;
