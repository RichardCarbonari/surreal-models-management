/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Adicione aqui outros domínios de imagens que for usar
    ],
  },
};

module.exports = nextConfig;
