/** @type {import('next').NextConfig} */

// Detectamos si estamos en producción (ej. GitHub Actions)
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Habilitar exportación estática
  output: 'export',
  
  // SOLUCIÓN AL 404 LOCAL:
  // Si es producción, usa '/omipyme_uned'. Si es local, usa la raíz vacía ''.
  basePath: isProd ? '/omipyme_uned' : '',
  assetPrefix: isProd ? '/omipyme_uned' : '',
  
  // Optimización de imágenes
  images: {
    unoptimized: true,
  },
  
  trailingSlash: true,
  
  compiler: {
    removeConsole: isProd,
  },
  
  // IMPORTANTE:
  // He comentado 'headers' y 'redirects' porque PROVOCAN ERRORES
  // con output: 'export'. GitHub Pages no soporta esto desde next.config.js.
  
  /* async headers() { ... },
  async redirects() { ... }, 
  */
};

// Análisis de bundle
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
