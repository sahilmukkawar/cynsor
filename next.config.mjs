/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
}

export default nextConfig