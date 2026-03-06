/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable if you need to use the Next.js Image component with external domains
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'example.com',
  //     },
  //   ],
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.csv$/,
      use: 'raw-loader',
    });
    return config;
  },
};

export default nextConfig;
