
/**@type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode:true,    
  images: {
    remotePatterns: [
      {
        hostname: "https://console.firebase.google.com/",
      },
    ],
    domains: ['firebasestorage.googleapis.com'],
    // path: `assets/slider/*`,
  },
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)