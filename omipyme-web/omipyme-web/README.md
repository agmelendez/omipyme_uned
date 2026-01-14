# 🏢 OMiPYME UNED - Sitio Web Oficial

[![Deploy to GitHub Pages](https://github.com/omipyme-uned/omipyme-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/omipyme-uned/omipyme-web/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Observatorio de Micro, Pequeñas y Medianas Empresas**  
> Universidad Estatal a Distancia de Costa Rica

Sitio web oficial del OMiPYME, construido con arquitectura moderna basada en el **Modelo de Cinco Pilares** para centralizar datos, herramientas, investigación, formación y ecosistema MIPYME.

---

## 📋 Tabla de Contenidos

- [Arquitectura](#-arquitectura)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Desarrollo](#-desarrollo)
- [Despliegue](#-despliegue)
- [Guía de Contenidos](#-guía-de-contenidos)
- [API de Datos](#-api-de-datos)
- [Contribuir](#-contribuir)

---

## 🏗 Arquitectura

El sitio se organiza en **cinco pilares** que responden a necesidades diferenciadas:

| Pilar | Ruta | Propósito |
|-------|------|-----------|
| 🔵 **Observatorio** | `/observatorio` | Datos, indicadores, encuestas nacionales |
| 🟠 **Herramientas** | `/herramientas` | Apps interactivas (Selfie Distrital, OBI, etc.) |
| 🟢 **Investigación** | `/investigacion` | Publicaciones, proyectos académicos |
| 🟣 **Formación** | `/formacion` | Cursos, toolkits, podcast, audiolibros |
| 🔷 **Ecosistema** | `/ecosistema` | Ferias, eventos, aliados, trámites |

### Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────────────┐
│                         HOME (/)                                 │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │Observa- │ │Herramie-│ │Investig-│ │Formación│ │Ecosiste-│   │
│  │torio    │ │ntas     │ │ación    │ │         │ │ma       │   │
│  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘   │
└───────┼──────────┼──────────┼──────────┼──────────┼────────────┘
        │          │          │          │          │
   ┌────▼────┐┌────▼────┐┌────▼────┐┌────▼────┐┌────▼────┐
   │Encuesta ││Selfie   ││Publica- ││Bachille-││Ferias   │
   │Nacional ││Distrital││ciones   ││rato     ││         │
   │         ││         ││         ││         ││         │
   │Dashboard││Territorio│Proyectos││Toolkits ││Eventos  │
   │         ││Vivo     ││         ││         ││         │
   │Datos    ││OBI      ││Equipo   ││Podcast  ││Aliados  │
   │Abiertos ││         ││         ││         ││         │
   └─────────┘└─────────┘└─────────┘└─────────┘└─────────┘
```

---

## 📁 Estructura del Proyecto

```
omipyme-web/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD para GitHub Pages
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── logos/              # Logos institucionales
│   │   ├── equipo/             # Fotos del equipo
│   │   ├── proyectos/          # Imágenes de proyectos
│   │   └── toolkits/           # Imágenes de toolkits
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navigation.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── common/
│   │   │   ├── Card.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── Breadcrumb.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── PillarCards.jsx
│   │   │   └── FeaturedContent.jsx
│   │   └── sections/
│   │       ├── observatorio/
│   │       ├── herramientas/
│   │       ├── investigacion/
│   │       ├── formacion/
│   │       └── ecosistema/
│   ├── pages/
│   │   ├── index.jsx           # Home
│   │   ├── observatorio/
│   │   │   ├── index.jsx
│   │   │   ├── encuesta-nacional.jsx
│   │   │   ├── dashboards.jsx
│   │   │   └── datos-abiertos.jsx
│   │   ├── herramientas/
│   │   │   ├── index.jsx
│   │   │   ├── selfie-distrital.jsx
│   │   │   └── [slug].jsx
│   │   ├── investigacion/
│   │   │   ├── index.jsx
│   │   │   ├── publicaciones/
│   │   │   └── equipo.jsx
│   │   ├── formacion/
│   │   │   ├── index.jsx
│   │   │   ├── toolkits.jsx
│   │   │   └── podcast.jsx
│   │   ├── ecosistema/
│   │   │   ├── index.jsx
│   │   │   ├── ferias.jsx
│   │   │   └── aliados.jsx
│   │   ├── nosotros.jsx
│   │   └── contacto.jsx
│   ├── data/
│   │   └── omipyme-data.json   # Base de datos de contenido
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── components/
│   └── lib/
│       ├── api.js              # Funciones de datos
│       └── utils.js            # Utilidades
├── docs/
│   ├── ARCHITECTURE.md
│   ├── CONTENT_GUIDE.md
│   └── API.md
├── package.json
├── next.config.js              # o astro.config.mjs
├── tailwind.config.js
└── README.md
```

---

## 🚀 Instalación

### Prerrequisitos

- Node.js >= 18.x
- npm >= 9.x o pnpm >= 8.x
- Git

### Clonar el Repositorio

```bash
# Clonar
git clone https://github.com/omipyme-uned/omipyme-web.git
cd omipyme-web

# Instalar dependencias
npm install
# o con pnpm
pnpm install
```

### Variables de Entorno

Crear archivo `.env.local`:

```env
# Base URL del sitio
NEXT_PUBLIC_SITE_URL=https://omipymes.uned.ac.cr

# API endpoints (opcional)
NEXT_PUBLIC_API_URL=https://api.omipymes.uned.ac.cr

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Feature flags
NEXT_PUBLIC_ENABLE_SEARCH=true
NEXT_PUBLIC_ENABLE_API=true
```

---

## 💻 Desarrollo

### Servidor de Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:3000
```

### Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta linter |
| `npm run test` | Ejecuta tests |
| `npm run export` | Exporta sitio estático |

### Convenciones de Código

- **Componentes**: PascalCase (`PillarCard.jsx`)
- **Utilidades**: camelCase (`formatDate.js`)
- **Estilos**: kebab-case (`pillar-card.module.css`)
- **Datos**: kebab-case (`omipyme-data.json`)

---

## 🌐 Despliegue

### GitHub Pages (Automático)

El repositorio incluye GitHub Actions para despliegue automático:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SITE_URL: ${{ vars.SITE_URL }}
      
      - name: Export static
        run: npm run export
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Configuración de GitHub Pages

1. Ir a **Settings** > **Pages**
2. Source: **GitHub Actions**
3. Custom domain: `omipymes.uned.ac.cr` (opcional)

### Despliegue Manual

```bash
# Build de producción
npm run build

# Exportar sitio estático
npm run export

# Los archivos estarán en ./out/
```

---

## 📝 Guía de Contenidos

### Agregar un Nuevo Proyecto

Editar `src/data/omipyme-data.json`:

```json
{
  "proyectos": {
    "activos": [
      {
        "id": "nuevo-proyecto",
        "nombre": "Nombre del Proyecto",
        "descripcion": "Descripción detallada...",
        "estado": "activo",
        "pilar": "herramientas",
        "url": "https://...",
        "tipo": "aplicacion-web",
        "tecnologias": ["React", "Node.js"],
        "audiencia": ["emprendedores"],
        "imagen": "/assets/proyectos/nuevo-proyecto.png"
      }
    ]
  }
}
```

### Agregar una Nueva Publicación

```json
{
  "publicaciones": {
    "articulos": [
      {
        "id": "nuevo-articulo",
        "titulo": "Título del Artículo",
        "tipo": "articulo",
        "anio": 2026,
        "revista": "Nombre de Revista",
        "volumen": "10(2)",
        "paginas": "45-67",
        "doi": "10.xxxx/xxxxx",
        "url": "https://..."
      }
    ]
  }
}
```

### Agregar una Nueva Feria

```json
{
  "eventos": {
    "feriasPorProvincia": {
      "sanJose": [
        {
          "nombre": "Nueva Feria",
          "lugar": "Ubicación",
          "frecuencia": "mensual",
          "contacto": "+506 xxxx-xxxx"
        }
      ]
    }
  }
}
```

---

## 🔌 API de Datos

El sitio expone datos mediante rutas API (si está habilitado):

### Endpoints Disponibles

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/proyectos` | GET | Lista todos los proyectos |
| `/api/proyectos/[id]` | GET | Detalle de un proyecto |
| `/api/publicaciones` | GET | Lista publicaciones |
| `/api/equipo` | GET | Miembros del equipo |
| `/api/ferias` | GET | Directorio de ferias |
| `/api/indicadores` | GET | Indicadores del observatorio |

### Ejemplo de Uso

```javascript
// Obtener proyectos activos
const response = await fetch('/api/proyectos?estado=activo');
const proyectos = await response.json();

// Obtener publicaciones por año
const response = await fetch('/api/publicaciones?anio=2024');
const publicaciones = await response.json();
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores

```css
:root {
  /* Colores institucionales */
  --color-uned-blue: #003366;
  --color-uned-green: #006633;
  
  /* Colores por pilar */
  --color-observatorio: #1B4F72;
  --color-herramientas: #E67E22;
  --color-investigacion: #27AE60;
  --color-formacion: #8E44AD;
  --color-ecosistema: #16A085;
  
  /* Neutros */
  --color-gray-900: #1a1a1a;
  --color-gray-700: #4a4a4a;
  --color-gray-500: #7a7a7a;
  --color-gray-300: #d4d4d4;
  --color-gray-100: #f5f5f5;
}
```

### Tipografía

```css
:root {
  --font-display: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## 🤝 Contribuir

### Flujo de Trabajo

1. Fork del repositorio
2. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'feat: agregar nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request

### Convención de Commits

```
feat: nueva funcionalidad
fix: corrección de bug
docs: cambios en documentación
style: formato, sin cambio de código
refactor: refactorización de código
test: agregar tests
chore: tareas de mantenimiento
```

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

---

## 📞 Contacto

**Observatorio de MiPYMES (OMiPYME+)**  
Universidad Estatal a Distancia  
San José, Costa Rica

- 📧 Email: omipyme@uned.ac.cr
- 📞 Teléfono: +506 2527-2000
- 🌐 Web: https://omipymes.uned.ac.cr

---

<p align="center">
  <img src="src/assets/logos/omipyme-logo.png" alt="OMiPYME" width="200">
  <br>
  <em>Generando conocimiento para el ecosistema MIPYME costarricense</em>
</p>
