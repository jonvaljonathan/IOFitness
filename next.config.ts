import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.io.fitness" }],
        destination: "https://io.fitness/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
