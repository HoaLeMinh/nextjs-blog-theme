// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.wixstatic.com', 'fonts.googleapis.com'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig