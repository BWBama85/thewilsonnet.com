/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};
const withTM = require("next-transpile-modules")(["react-daisyui"]);

module.exports = withTM(nextConfig);
