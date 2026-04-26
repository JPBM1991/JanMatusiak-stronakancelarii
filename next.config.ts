import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.matusiak.legal" }],
        destination: "https://matusiak.legal/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
