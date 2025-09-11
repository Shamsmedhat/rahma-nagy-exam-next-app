import { NextConfig } from "next";
import nextRoutes from "nextjs-routes/config";
import createNextIntlPlugin from "next-intl/plugin";

const withRoutes = nextRoutes();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { remotePatterns: [{ hostname: "exam.elevateegy.com" }] },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(withRoutes(nextConfig));
