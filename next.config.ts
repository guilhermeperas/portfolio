import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to https://guilhermeperas.github.io/portfolio/
  // uncomment the next line:
  // basePath: "/portfolio",
};

export default nextConfig;
