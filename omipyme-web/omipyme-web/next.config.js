/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilitar exportación estática para GitHub Pages
  output: 'export',
  
  // Base path para GitHub Pages (ajustar si es necesario)
  // basePath: '/omipyme-web',
  
  // Optimización de imágenes para exportación estática
  images: {
    unoptimized: true,
  },
  
  // Trailing slashes para mejor compatibilidad
  trailingSlash: true,
  
  // Configuración de compilación
  compiler: {
    // Remover console.log en producción
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirecciones (para URLs antiguas)
  async redirects() {
    return [
      {
        source: '/selfiedistrital',
        destination: '/herramientas/selfie-distrital',
        permanent: true,
      },
      {
        source: '/chatbot',
        destination: '/herramientas/obi',
        permanent: true,
      },
      {
        source: '/podcast',
        destination: '/formacion/podcast',
        permanent: true,
      },
      {
        source: '/audiolibros',
        destination: '/formacion/audiolibros',
        permanent: true,
      },
    ];
  },
};

// Análisis de bundle (opcional)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
