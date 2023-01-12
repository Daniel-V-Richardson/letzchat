/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com","platform-lookaside.fbsbx.com","scontent.fmaa5-1.fna.fbcdn.net"]
  },
  experimental: {
    appDir: true
  },
  typescript: {

    ignoreBuildErrors: true,
  },
}
