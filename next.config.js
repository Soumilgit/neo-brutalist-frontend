/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize CSS handling for better HMR
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

module.exports = nextConfig