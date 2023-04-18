// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  distDir: 'dist',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.wixstatic.com', 'fonts.googleapis.com'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig