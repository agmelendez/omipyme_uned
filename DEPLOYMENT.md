# OMiPYME Website - Deployment Guide

## ✅ Site Status: READY FOR DEPLOYMENT

El sitio web está completamente configurado y listo para ser servido desde la raíz del repositorio.

## 📁 Estructura de Archivos en la Raíz

```
/
├── main.html              ← Archivo principal de entrada (39 KB)
├── index.html             ← Página de inicio (idéntica a main.html)
├── 404.html               ← Página de error 404
├── favicon.ico            ← Favicon del sitio
├── apple-touch-icon.png   ← Icono para dispositivos Apple
├── _next/                 ← Assets de Next.js (JavaScript, CSS, datos)
│   ├── static/
│   │   └── chunks/        ← JavaScript bundles
│   └── data/              ← Datos JSON estáticos
├── assets/                ← Recursos visuales del sitio
│   ├── logos/             ← Logos institucionales
│   │   ├── omipyme-logo.svg
│   │   ├── omipyme-logo.png
│   │   ├── omipyme-logo-white.png
│   │   └── uned-logo-white.png
│   ├── proyectos/         ← Imágenes de proyectos
│   │   ├── selfie-distrital.png
│   │   ├── territorio-vivo.png
│   │   └── obi.png
│   └── aliados/           ← Logos de aliados
│       ├── meic.png
│       ├── sbd.png
│       ├── estado-nacion.png
│       ├── tec.png
│       └── faedpyme.png
└── omipyme-web/           ← Código fuente del proyecto Next.js
```

## 🚀 Cómo Usar

### Opción 1: Servidor Web Local
```bash
# Navegar al directorio raíz
cd /path/to/omipyme_uned

# Iniciar servidor HTTP simple
python3 -m http.server 8000
# o
php -S localhost:8000

# Abrir en navegador: http://localhost:8000/main.html
```

### Opción 2: GitHub Pages
1. Ir a Settings > Pages en el repositorio GitHub
2. Seleccionar branch: `claude/verify-website-NA92t`
3. Seleccionar folder: `/ (root)`
4. Guardar
5. El sitio estará disponible en la URL de GitHub Pages

### Opción 3: Hosting Estático (Netlify, Vercel, etc.)
- Simplemente apuntar el hosting a la raíz del repositorio
- El archivo main.html se servirá automáticamente

## 🎨 Personalización de Logos e Imágenes

Actualmente el sitio usa **placeholders SVG** para los logos e imágenes. Para reemplazarlos con imágenes reales:

### Logo Principal (Header - parte superior izquierda)
Reemplazar: `assets/logos/omipyme-logo.png`
- Tamaño recomendado: 200x80 px
- Formato: PNG o SVG

### Logo Blanco (Footer)
Reemplazar: `assets/logos/omipyme-logo-white.png`
- Tamaño recomendado: 200x80 px
- Formato: PNG con fondo transparente

### Imágenes de Proyectos
Reemplazar archivos en `assets/proyectos/`:
- `selfie-distrital.png` (400x300 px)
- `territorio-vivo.png` (400x300 px)
- `obi.png` (400x300 px)

### Logos de Aliados
Reemplazar archivos en `assets/aliados/`:
- Tamaño recomendado: 120x60 px
- Formato: PNG con fondo transparente

## 📝 Notas Importantes

- **main.html** es el archivo principal de entrada
- **index.html** es idéntico a main.html (para compatibilidad)
- Todos los archivos JavaScript y CSS están en `_next/`
- El sitio es completamente estático y no requiere Node.js para funcionar
- Los symlinks (enlaces simbólicos) en assets apuntan a placeholders SVG

## ✨ Características del Sitio

- ✅ Diseño responsivo (mobile-first)
- ✅ Animaciones suaves (Framer Motion)
- ✅ SEO optimizado (meta tags, Open Graph)
- ✅ Accesibilidad (ARIA labels)
- ✅ 5 pilares temáticos del OMiPYME
- ✅ Navegación completa
- ✅ Sección de proyectos destacados
- ✅ Sección de publicaciones recientes

## 🔧 Desarrollo

Si necesitas hacer cambios al sitio:

1. Navegar al código fuente:
   ```bash
   cd omipyme-web/omipyme-web
   ```

2. Instalar dependencias:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Construir sitio estático:
   ```bash
   npm run build
   ```

5. Copiar archivos generados a la raíz:
   ```bash
   cp -r out/* ../../
   cp out/index.html ../../main.html
   ```

## 📊 Commits Realizados

1. `d3cab7d` - Initialize OMiPYME web project repository
2. `492c466` - feat: add OMiPYME website files and verify functionality
3. `9fecb50` - feat: add main.html and static site files to repository root
4. `9a30bb5` - feat: add complete asset structure and prepare site for deployment

---

**Última actualización:** 2026-01-14
**Branch:** `claude/verify-website-NA92t`
**Estado:** ✅ Ready for Production
