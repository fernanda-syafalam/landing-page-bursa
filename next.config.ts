import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: Dangerously allow production builds to deliberately bypass `next lint`.
  },
};

export default nextConfig;
