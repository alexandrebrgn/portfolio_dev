import type { NextConfig } from "next";
import { networkInterfaces } from "node:os";

const lanIPs = Object.values(networkInterfaces())
  .flat()
  .filter((n): n is NonNullable<typeof n> => !!n && n.family === "IPv4" && !n.internal)
  .map((n) => n.address);

// Optimisation
const nextConfig: NextConfig = {
  allowedDevOrigins: lanIPs,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
