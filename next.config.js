/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.thinkgroup.vn',
          pathname: '**',
        },
      ]
    },
  };

module.exports = nextConfig
