import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SITE_NAME: process.env.SITE_NAME || "DkBlog",
    SITE_LOCALE: process.env.SITE_LOCALE || "en_US",
    SITE_BASEURL: process.env.SITE_BASEURL || "http://localhost:3000",
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "github.com" },
    ],
  },
  experimental: {
    webpackBuildWorker: true,
    turbo: {},
  },
};

export default withContentlayer(nextConfig);
