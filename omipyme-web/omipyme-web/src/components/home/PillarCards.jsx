import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Wrench, 
  BookOpen, 
  GraduationCap, 
  Network,
  ArrowRight 
} from 'lucide-react';

const pilares = [
  {
    id: 'observatorio',
    nombre: 'Observatorio',
    descripcion: 'Datos, indicadores y resultados de investigación cuantitativa sobre el sector MIPYME.',
    icono: BarChart3,
    color: 'observatorio',
    ruta: '/observatorio',
    destacados: ['Encuesta Nacional', 'Dashboards', 'Datos Abiertos'],
  },
  {
    id: 'herramientas',
    nombre: 'Herramientas',
    descripcion: 'Aplicaciones interactivas para diagnóstico, planificación y toma de decisiones.',
    icono: Wrench,
    color: 'herramientas',
    ruta: '/herramientas',
    destacados: ['Selfie Distrital', 'Territorio Vivo', 'OBI Chatbot'],
  },
  {
    id: 'investigacion',
    nombre: 'Investigación',
    descripcion: 'Producción académica y científica sobre emprendimiento e innovación.',
    icono: BookOpen,
    color: 'investigacion',
    ruta: '/investigacion',
    destacados: ['Publicaciones', 'Proyectos', 'Equipo'],
  },
  {
    id: 'formacion',
    nombre: 'Formación',
    descripcion: 'Recursos educativos para desarrollo de capacidades emprendedoras.',
    icono: GraduationCap,
    color: 'formacion',
    ruta: '/formacion',
    destacados: ['Bachillerato', 'Toolkits', 'Podcast'],
  },
  {
    id: 'ecosistema',
    nombre: 'Ecosistema',
    descripcion: 'Conexión entre actores del ecosistema empresarial y servicios de apoyo.',
    icono: Network,
    color: 'ecosistema',
    ruta: '/ecosistema',
    destacados: ['Ferias', 'Eventos', 'Aliados'],
  },
];

const colorClasses = {
  observatorio: {
    bg: 'bg-pilar-observatorio',
    bgLight: 'bg-pilar-observatorio/10',
    text: 'text-pilar-observatorio',
    border: 'border-pilar-observatorio',
    hover: 'hover:bg-pilar-observatorio',
  },
  herramientas: {
    bg: 'bg-pilar-herramientas',
    bgLight: 'bg-pilar-herramientas/10',
    text: 'text-pilar-herramientas',
    border: 'border-pilar-herramientas',
    hover: 'hover:bg-pilar-herramientas',
  },
  investigacion: {
    bg: 'bg-pilar-investigacion',
    bgLight: 'bg-pilar-investigacion/10',
    text: 'text-pilar-investigacion',
    border: 'border-pilar-investigacion',
    hover: 'hover:bg-pilar-investigacion',
  },
  formacion: {
    bg: 'bg-pilar-formacion',
    bgLight: 'bg-pilar-formacion/10',
    text: 'text-pilar-formacion',
    border: 'border-pilar-formacion',
    hover: 'hover:bg-pilar-formacion',
  },
  ecosistema: {
    bg: 'bg-pilar-ecosistema',
    bgLight: 'bg-pilar-ecosistema/10',
    text: 'text-pilar-ecosistema',
    border: 'border-pilar-ecosistema',
    hover: 'hover:bg-pilar-ecosistema',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function PillarCards() {
  return (
    <section className="section bg-gray-50">
      <div className="container-omipyme">
        {/* Header de sección */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Cinco pilares para el{' '}
            <span className="text-gradient">ecosistema MIPYME</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Explora nuestros recursos organizados en cinco áreas temáticas 
            diseñadas para diferentes necesidades.
          </motion.p>
        </div>

        {/* Grid de pilares */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {pilares.map((pilar, index) => {
            const Icon = pilar.icono;
            const colors = colorClasses[pilar.color];
            
            return (
              <motion.a
                key={pilar.id}
                href={pilar.ruta}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border-l-4 ${colors.border}`}
              >
                {/* Icono */}
                <div className={`mb-4 inline-flex rounded-xl p-3 ${colors.bgLight}`}>
                  <Icon className={`h-6 w-6 ${colors.text}`} />
                </div>

                {/* Contenido */}
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {pilar.nombre}
                </h3>
                <p className="mb-4 text-gray-600 line-clamp-2">
                  {pilar.descripcion}
                </p>

                {/* Tags destacados */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {pilar.destacados.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className={`flex items-center gap-1 text-sm font-medium ${colors.text}`}>
                  Explorar
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>

                {/* Decorador de esquina */}
                <div
                  className={`absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-5 ${colors.bg}`}
                  aria-hidden="true"
                />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
