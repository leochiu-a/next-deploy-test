const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  reactStrictMode: true,
  pageExtensions: ["tsx"],
};

module.exports = withBundleAnalyzer(nextConfig);
