import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves this project from /portfolio/ (repository name).
  output: "export",
  basePath: "/portfolio",
  trailingSlash: true,
  // GitHub Pages is static hosting and does not run the Next.js image optimizer.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
