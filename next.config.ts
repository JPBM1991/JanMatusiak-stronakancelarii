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
      {
        source: "/of-counsel",
        destination: "/daria-meysztowicz-matusiak",
        permanent: true,
      },
      {
        source: "/en/of-counsel",
        destination: "/en/daria-meysztowicz-matusiak",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
