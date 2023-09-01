/** @type {import('next').NextConfig} */
const path = require('path');
 
const nextConfig = {
  // output: 'export',
  // serverRuntimeConfig: {},
  
  publicRuntimeConfig: {
    apiUrl:process.env.API_URL,
    clientUrl:process.env.CLIENT_URL
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    // unoptimized: true,
    domains: ['127.0.0.1', 'localhost', 'https://delletran-backend.vercel.app', 'https://delletran.vercel.app'],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: '/images/**',
      },
      {
        protocol: "https",
        hostname: "delletran.github.io/delletran.com",
        port: "",
        pathname: '/images/**',
      },
      {
        protocol: "https",
        hostname: "delletran.com",
        port: "",
        pathname: '/images/**',
      },
      {
        protocol: "https",
        hostname: "delletran.vercel.app",
        port: "",
        pathname: '/images/**',
      },
    ],
  },
}


module.exports = nextConfig
