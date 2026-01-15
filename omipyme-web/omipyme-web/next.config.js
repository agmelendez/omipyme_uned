/** @type {import('next').NextConfig} */

// Detectamos si estamos en producción (ej. GitHub Actions)
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Habilitar exportación estática
  output: 'export',
  
  // LÓGICA CORREGIDA:
  // Solo usamos el basePath '/omipyme_uned' en producción.
  // En desarrollo local, el sitio funcionará en la raíz (localhost:3000) sin dar 404.
  basePath: isProd ? '/omipyme_uned' : '',
  assetPrefix: isProd ? '/omipyme_uned' : '',
  
  // Optimización de imágenes (necesario para exportación estática)
  images: {
    unoptimized: true,
  },
  
  trailingSlash: true,
  
  compiler: {
    removeConsole: isProd,
  },
  
  // NOTA IMPORTANTE:
  // Las 'redirects' NO son compatibles con output: 'export'.
  // He comentado esta sección para evitar conflictos. 
  // Si necesitas redirecciones en un sitio estático, debes usar meta tags HTML 
  // o configurarlo en el servidor (GitHub Pages no soporta redirecciones de servidor nativas).
  /* async redirects() {
    return [
      {
        source: '/selfiedistrital',
        destination: '/herramientas/selfie-distrital',
        permanent: true,
      },
      // ... otras redirecciones
    ];
  },
  */
};

// Análisis de bundle
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
