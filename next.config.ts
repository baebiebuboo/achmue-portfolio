import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root (a stray ~/package-lock.json otherwise makes
  // Next.js treat the whole home folder as the workspace).
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [{ source: "/home", destination: "/", permanent: false }];
  },
};

export default nextConfig;
