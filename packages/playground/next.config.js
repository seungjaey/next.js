/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/dynamic/:path((?!__?next|api).*)*',
          has: [
            {
              type: 'header',
              key: 'user-agent',
              value: '.*Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)|Tablet|tablet.*',
            },
          ],
          destination: '/m/dynamic/:path*',
        },
      ],
    };
  },
}

module.exports = nextConfig
