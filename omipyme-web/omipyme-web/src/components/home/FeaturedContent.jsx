import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';

export default function FeaturedContent({ proyectos = [], publicaciones = [] }) {
  return (
    <section className="section bg-white">
      <div className="container-omipyme">
        {/* Proyectos destacados */}
        {proyectos && proyectos.length > 0 && (
          <div className="mb-16">
            <div className="section-header">
              <h2 className="section-title">Proyectos Destacados</h2>
              <p className="section-subtitle">
                Conoce nuestras herramientas y aplicaciones más recientes
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {proyectos.map((proyecto, index) => (
                <motion.div
                  key={proyecto.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group overflow-hidden rounded-xl bg-white shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
                >
                  {proyecto.imagen && (
                    <div className="aspect-video w-full overflow-hidden bg-gray-100">
                      <img
                        src={proyecto.imagen}
                        alt={proyecto.nombre}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {proyecto.nombre}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-gray-600">
                      {proyecto.descripcion}
                    </p>
                    <a
                      href={proyecto.url || '#'}
                      className="inline-flex items-center gap-1 text-sm font-medium text-pilar-herramientas hover:gap-2 transition-all"
                    >
                      Ver proyecto
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="/herramientas"
                className="btn bg-pilar-herramientas text-white hover:bg-opacity-90"
              >
                Ver todas las herramientas
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        )}

        {/* Publicaciones destacadas */}
        {publicaciones && publicaciones.length > 0 && (
          <div>
            <div className="section-header">
              <h2 className="section-title">Publicaciones Recientes</h2>
              <p className="section-subtitle">
                Investigaciones y análisis del sector MIPYME costarricense
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {publicaciones.map((publicacion, index) => (
                <motion.div
                  key={publicacion.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-pilar-investigacion hover:shadow-card"
                >
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{publicacion.anio}</span>
                    {publicacion.tipo && (
                      <>
                        <span>•</span>
                        <span className="capitalize">{publicacion.tipo}</span>
                      </>
                    )}
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900 line-clamp-2">
                    {publicacion.titulo}
                  </h3>
                  {publicacion.revista && (
                    <p className="mb-3 text-sm text-gray-600">
                      {publicacion.revista}
                      {publicacion.volumen && ` ${publicacion.volumen}`}
                    </p>
                  )}
                  {publicacion.url && (
                    <a
                      href={publicacion.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-pilar-investigacion hover:gap-2 transition-all"
                    >
                      Leer más
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="/investigacion/publicaciones"
                className="btn bg-pilar-investigacion text-white hover:bg-opacity-90"
              >
                Ver todas las publicaciones
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
