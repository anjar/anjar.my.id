/**
 * @type {import('next').NextConfig}
 */

import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['sxmnidvxxuvndbbtuwnr.supabase.co'],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default withContentlayer()(nextConfig);
