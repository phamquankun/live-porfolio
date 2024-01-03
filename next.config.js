/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.bitmart.com",
      "solutions.viettel.vn",
      "sparkminds.net",
      "cdn-icons-png.flaticon.com",
    ],
  },
};

module.exports = nextConfig;
