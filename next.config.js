/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'www.datocms-assets.com',
      'media.graphassets.com',
      'graph.instagram.com',
    ],
  },
};

module.exports = nextConfig;
