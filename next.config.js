/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@babel/preset-react',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
  '@fullcalendar/list',
  '@fullcalendar/timeline'
]);

const nextConfig = withTM({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    esmExternals: false
  },
  images: {
    domains: ['blog.infrahive.io', 'images.unsplash.com','upload.wikimedia.org']
  }
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:any*',
  //       destination: '/apps/[id]',
  //     },
  //   ];
  // },
});

module.exports = nextConfig;
