import path from "path";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  experimental: { optimizeCss: true }, // lo dejamos, pero no hará nada importante
  webpack(config, { dev, isServer }) {
    // Sólo en producción cliente deshabilitamos cualquier minimize
    if (!dev && !isServer) {
      config.optimization.minimize = false;
      // Además, por si acaso, eliminamos todos los minimizers (JS y CSS)
      config.optimization.minimizer = [];
    }
    return config;
  },
};

export default nextConfig;
