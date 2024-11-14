import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  images: {
    domains: ["via.placeholder.com", "images.unsplash.com"],
  },
  ...withPWA({
    dest: "public",
  }),
};

export default nextConfig;
