/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: "images.unsplash.com" },
      { protocol: "lh3.googleusercontent.com" },
      { protocol: "drive.google.com" },
    ],
  },
};
module.exports = nextConfig;
