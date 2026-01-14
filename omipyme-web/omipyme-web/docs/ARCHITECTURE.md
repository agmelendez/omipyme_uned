# Arquitectura del Sitio Web OMiPYME

## 1. Visión General

El sitio web OMiPYME se estructura bajo el **Modelo de Cinco Pilares**, diseñado para servir a audiencias diversas con necesidades específicas.

```
                    ┌──────────────────────────────────┐
                    │           HOME (/)               │
                    │   • Hero con indicadores         │
                    │   • Accesos rápidos a pilares    │
                    │   • Contenido destacado          │
                    │   • Buscador global              │
                    └───────────────┬──────────────────┘
                                    │
        ┌───────────┬───────────┬───┴───┬───────────┬───────────┐
        ▼           ▼           ▼       ▼           ▼           ▼
   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
   │OBSERVA- │ │HERRAMI- │ │INVESTIG-│ │FORMACIÓN│ │ECOSISTE-│
   │TORIO    │ │ENTAS    │ │ACIÓN    │ │         │ │MA       │
   │  🔵     │ │  🟠     │ │  🟢     │ │  🟣     │ │  🔷     │
   └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘
```

## 2. Estructura de Rutas

### Pilar 1: Observatorio (`/observatorio`)

| Ruta | Descripción |
|------|-------------|
| `/observatorio` | Landing principal del observatorio |
| `/observatorio/encuesta-nacional` | Información de la Encuesta Nacional |
| `/observatorio/encuesta-nacional/[edicion]` | Edición específica (2026, 2022, etc.) |
| `/observatorio/dashboards` | Hub de visualizaciones |
| `/observatorio/dashboards/cantonal` | Dashboard por cantón |
| `/observatorio/dashboards/sectorial` | Dashboard por sector económico |
| `/observatorio/indicadores` | Banco de indicadores |
| `/observatorio/datos-abiertos` | Portal de descarga de datos |
| `/observatorio/metodologia` | Documentación técnica |

### Pilar 2: Herramientas (`/herramientas`)

| Ruta | Descripción |
|------|-------------|
| `/herramientas` | Catálogo de herramientas |
| `/herramientas/selfie-distrital` | App Selfie Distrital |
| `/herramientas/territorio-vivo` | App Territorio Vivo |
| `/herramientas/obi` | Chatbot OBI |
| `/herramientas/asistente-ia` | GPT personalizado |
| `/herramientas/calculadoras` | Calculadoras empresariales |
| `/herramientas/api` | Documentación de API |

### Pilar 3: Investigación (`/investigacion`)

| Ruta | Descripción |
|------|-------------|
| `/investigacion` | Portal de investigación |
| `/investigacion/publicaciones` | Repositorio de publicaciones |
| `/investigacion/publicaciones/[id]` | Ficha de publicación |
| `/investigacion/proyectos` | Proyectos activos |
| `/investigacion/proyectos/[slug]` | Detalle de proyecto |
| `/investigacion/equipo` | Perfiles de investigadores |
| `/investigacion/lineas` | Líneas de investigación |
| `/investigacion/colaboraciones` | Redes y alianzas |

### Pilar 4: Formación (`/formacion`)

| Ruta | Descripción |
|------|-------------|
| `/formacion` | Centro de formación |
| `/formacion/bachillerato` | Bachillerato para Empleabilidad |
| `/formacion/cursos` | Catálogo de cursos |
| `/formacion/toolkits` | Biblioteca de toolkits |
| `/formacion/toolkits/[slug]` | Toolkit específico |
| `/formacion/podcast` | Podcast con episodios |
| `/formacion/audiolibros` | Catálogo de audiolibros |
| `/formacion/rutas` | Rutas de aprendizaje |

### Pilar 5: Ecosistema (`/ecosistema`)

| Ruta | Descripción |
|------|-------------|
| `/ecosistema` | Hub del ecosistema |
| `/ecosistema/ferias` | Directorio de ferias |
| `/ecosistema/ferias/[provincia]` | Ferias por provincia |
| `/ecosistema/eventos` | Calendario de eventos |
| `/ecosistema/academia-empresarias` | Programa de empresarias |
| `/ecosistema/aliados` | Directorio de aliados |
| `/ecosistema/tramites` | Guía de trámites |
| `/ecosistema/noticias` | Noticias del sector |

### Secciones Institucionales

| Ruta | Descripción |
|------|-------------|
| `/nosotros` | Acerca de OMiPYME |
| `/medios` | OMiPYME en medios |
| `/contacto` | Formulario de contacto |
| `/buscar` | Búsqueda global |
| `/transparencia` | Informes de gestión |

## 3. Flujo de Datos

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  omipyme-data   │────▶│   Components    │────▶│     Pages       │
│     .json       │     │   (React)       │     │   (Next.js)     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │                       │
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   API Routes    │     │  Static Props   │     │   SSG/ISR       │
│  /api/*         │     │  getStaticProps │     │   Export        │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

## 4. Sistema de Diseño

### Colores

```css
/* Institucionales */
--uned-blue: #003366
--uned-green: #006633

/* Pilares */
--observatorio: #1B4F72
--herramientas: #E67E22
--investigacion: #27AE60
--formacion: #8E44AD
--ecosistema: #16A085
```

### Tipografía

- **Display**: Montserrat (títulos)
- **Body**: Open Sans (texto)
- **Mono**: JetBrains Mono (código/datos)

### Componentes Base

1. **PillarCard**: Tarjeta con borde de color por pilar
2. **Button**: Variantes primary, secondary, outline
3. **Badge**: Estados activo, desarrollo, archivado
4. **SearchBar**: Buscador global con filtros
5. **Breadcrumb**: Navegación jerárquica

## 5. Integraciones

### Herramientas Externas

| Herramienta | URL Actual | Acción |
|-------------|------------|--------|
| Selfie Distrital | omipymes.uned.ac.cr/selfiedistrital | Integrar |
| Territorio Vivo | Wix externo | Migrar |
| OBI | omipymes.uned.ac.cr/chatbot | Integrar |
| Toolkits | Adobe Express | Migrar |

### APIs y Servicios

- **Shiny Server**: Dashboards R
- **CKAN/Dataverse**: Datos abiertos
- **Google Analytics 4**: Métricas
- **OpenAI API**: Asistente IA

## 6. Despliegue

### Entornos

| Entorno | URL | Branch |
|---------|-----|--------|
| Producción | omipymes.uned.ac.cr | main |
| Staging | staging.omipymes.uned.ac.cr | develop |
| Preview | PR-specific URLs | feature/* |

### CI/CD Pipeline

```
Push ─▶ Lint ─▶ Test ─▶ Build ─▶ Deploy
  │       │       │       │        │
  │       │       │       │        └── GitHub Pages
  │       │       │       └── Next.js export
  │       │       └── Jest tests
  │       └── ESLint + Prettier
  └── GitHub Actions trigger
```

## 7. SEO y Metadatos

### Schema.org

- Organization
- WebSite
- Dataset
- ScholarlyArticle
- Event
- Person

### Open Graph

Cada página debe incluir:
- og:title
- og:description
- og:image
- og:url

## 8. Accesibilidad

- WCAG 2.1 AA
- Navegación por teclado
- Skip links
- ARIA labels
- Contraste mínimo 4.5:1
- Focus visible

## 9. Performance

### Objetivos Core Web Vitals

| Métrica | Objetivo |
|---------|----------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |

### Optimizaciones

- Imágenes en WebP/AVIF
- Lazy loading
- Code splitting
- Preconnect a dominios críticos
- Service Worker para offline
