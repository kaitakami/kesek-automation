/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
  },
  images: {
    domains: ["media.graphassets.com"],
  },
};

module.exports = nextConfig;
