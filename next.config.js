/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false //  https://github.com/chakra-ui/chakra-ui/issues/7167
  }
}

module.exports = nextConfig
