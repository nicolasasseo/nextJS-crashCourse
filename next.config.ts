import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {hostname: "upload.wikimedia.org"}]
  }
};

export default nextConfig;
