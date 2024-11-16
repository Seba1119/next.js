import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React Strict Mode for better error handling
  images: {
    domains: ['example.com'], // Add external image domains you want to allow
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Environment variables (replace with actual variable)
  },
  // Typing config as 'any' to avoid errors
  webpack(config: any, { isServer }: { isServer: boolean }) {
    if (!isServer) {
      config.resolve.fallback = { fs: false }; // Handle conflicts for client-side with Node.js built-in modules
    }
    return config;
  },
};

export default nextConfig;
