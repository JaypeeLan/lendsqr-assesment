const nextConfig = {
  swcMinify: true,
  experimental: {
    swcMinify: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
