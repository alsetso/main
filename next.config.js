const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@alset/config', '@alset/ui'],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  // Ensure path aliases work in both build and runtime
  webpack: (config, { isServer }) => {
    // Resolve path aliases for webpack (used for some bundling)
    const aliases = {
      '@': path.resolve(__dirname, './app'),
      '@ui': path.resolve(__dirname, './packages/ui'),
      '@config': path.resolve(__dirname, './packages/config'),
      '@motion': path.resolve(__dirname, './packages/ui/motion'),
    };
    
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
    };
    
    // Ensure workspace packages are resolved correctly
    config.resolve.symlinks = true;
    
    // Ensure modules are resolved from project root
    config.resolve.modules = [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'packages'),
      'node_modules',
    ];
    
    return config;
  },
}

module.exports = nextConfig

