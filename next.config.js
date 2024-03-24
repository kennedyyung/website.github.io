/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/kennedyyung.github.io',

  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
