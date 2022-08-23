/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["image.tmdb.org", 
            "avatars.githubusercontent.com", 
            "lh3.googleusercontent.com"
          ]
  },
  output: 'standalone'
}

module.exports = nextConfig
