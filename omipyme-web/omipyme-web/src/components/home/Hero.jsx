import { motion } from 'framer-motion';
import { Search, ChevronRight, BarChart3, Users, FileText, MapPin } from 'lucide-react';

const stats = [
  { value: '82', label: 'Cantones cubiertos', icon: MapPin },
  { value: '250+', label: 'Indicadores', icon: BarChart3 },
  { value: '50+', label: 'Publicaciones', icon: FileText },
  { value: '11', label: 'Investigadores', icon: Users },
];

export default function Hero() {
  return (
    <section className="hero">
      {/* Patrón de fondo */}
      <div className="hero-pattern" aria-hidden="true" />
      
      {/* Contenido principal */}
      <div className="container-omipyme hero-content">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              IV Encuesta Nacional MIPYME 2026 en desarrollo
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            Observatorio de{' '}
            <span className="text-yellow-300">MiPYMES</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl"
          >
            Generamos conocimiento, estrategias y prototipos para mejorar las 
            capacidades emprendedoras e innovadoras de la población costarricense.
          </motion.p>

          {/* Buscador */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mb-10 max-w-xl"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar datos, publicaciones, herramientas..."
                className="w-full rounded-full bg-white py-4 pl-12 pr-4 text-gray-900 shadow-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-uned-blue px-6 py-2 font-medium text-white transition hover:bg-pilar-observatorio">
                Buscar
              </button>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/observatorio/encuesta-nacional"
              className="btn btn-lg bg-yellow-400 text-gray-900 hover:bg-yellow-300"
            >
              Encuesta Nacional 2026
              <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href="/herramientas/selfie-distrital"
              className="btn btn-lg border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              Explorar Selfie Distrital
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="stats-grid mx-auto mt-16 max-w-4xl"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card">
                <Icon className="mx-auto mb-2 h-6 w-6 opacity-70" />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Wave decorativa */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="rgb(250, 250, 250)"
          />
        </svg>
      </div>
    </section>
  );
}
