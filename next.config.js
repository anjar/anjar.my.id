/**
 * @type {import('next').NextConfig}
 */

const { withContentlayer } = require('next-contentlayer');


const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['sxmnidvxxuvndbbtuwnr.supabase.co'],
  },
  eslint: {
    dirs: ['pages', 'components', 'hooks', 'lib', 'types']
  },
  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },
};

module.exports = withContentlayer(nextConfig);
