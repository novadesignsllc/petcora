import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/petcora",
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "154036629.cdn6.editmysite.com",
      },
      {
        protocol: "https",
        hostname: "c90ef8c4cbb00b7bf436.cdn6.editmysite.com",
      },
    ],
  },
};

export default nextConfig;
