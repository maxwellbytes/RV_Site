import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  allowedDevOrigins: ['puzzledly-intersocial-jazlyn.ngrok-free.dev'],
  devIndicators: false,
};

export default nextConfig;
