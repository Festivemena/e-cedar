/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'cdn.pixabay.com',
      'cdn.sanity.io',
      'p16-amd-va.tiktokcdn.com',
      'image.shutterstock.com'
    ],
  },
};

module.exports = nextConfig;
