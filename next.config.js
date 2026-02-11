/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/book-a-free-call",
        destination: "https://go.scalevault.ai/booking-step",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
