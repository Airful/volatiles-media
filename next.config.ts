import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mediumaquamarine-cheetah-559193.hostingersite.com",
      },
    ],
  },
};

export default nextConfig;
