/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Otimizações para produção
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Configurações para build
  typescript: {
    // Não falhar build se houver erros de tipo (apenas avisar)
    ignoreBuildErrors: false,
  },
  eslint: {
    // Não falhar build se houver erros de lint (apenas avisar)
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
