import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const footerLinks = {
  observatorio: [
    { name: 'Encuesta Nacional', href: '/observatorio/encuesta-nacional' },
    { name: 'Dashboards', href: '/observatorio/dashboards' },
    { name: 'Datos Abiertos', href: '/observatorio/datos-abiertos' },
    { name: 'Metodología', href: '/observatorio/metodologia' },
  ],
  herramientas: [
    { name: 'Selfie Distrital', href: '/herramientas/selfie-distrital' },
    { name: 'Territorio Vivo', href: '/herramientas/territorio-vivo' },
    { name: 'OBI Chatbot', href: '/herramientas/obi' },
    { name: 'API Pública', href: '/herramientas/api' },
  ],
  formacion: [
    { name: 'Bachillerato', href: '/formacion/bachillerato' },
    { name: 'Toolkits', href: '/formacion/toolkits' },
    { name: 'Podcast', href: '/formacion/podcast' },
    { name: 'Audiolibros', href: '/formacion/audiolibros' },
  ],
  institucional: [
    { name: 'Acerca de', href: '/nosotros' },
    { name: 'Equipo', href: '/investigacion/equipo' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Medios', href: '/medios' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/omipymeuned', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/omipymeuned', icon: Instagram },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/omipyme-uned', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com/@omipymeuned', icon: Youtube },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Sección principal */}
      <div className="container-omipyme py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Logo e información */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block">
              <img
                src="/assets/logos/omipyme-logo-white.png"
                alt="OMiPYME"
                className="h-12 w-auto"
              />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Observatorio de Micro, Pequeñas y Medianas Empresas de la 
              Universidad Estatal a Distancia de Costa Rica.
            </p>
            
            {/* Contacto */}
            <div className="mt-6 space-y-2">
              <a
                href="mailto:omipyme@uned.ac.cr"
                className="flex items-center gap-2 text-sm hover:text-white"
              >
                <Mail className="h-4 w-4" />
                omipyme@uned.ac.cr
              </a>
              <a
                href="tel:+50625272000"
                className="flex items-center gap-2 text-sm hover:text-white"
              >
                <Phone className="h-4 w-4" />
                +506 2527-2000
              </a>
              <p className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                San José, Costa Rica
              </p>
            </div>

            {/* Redes sociales */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-gray-800 p-2 transition hover:bg-uned-blue hover:text-white"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Observatorio
            </h3>
            <ul className="space-y-2">
              {footerLinks.observatorio.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Herramientas
            </h3>
            <ul className="space-y-2">
              {footerLinks.herramientas.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Formación
            </h3>
            <ul className="space-y-2">
              {footerLinks.formacion.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Institucional
            </h3>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-gray-800">
        <div className="container-omipyme flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {currentYear} OMiPYME - Universidad Estatal a Distancia. 
            Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="/aviso-legal" className="hover:text-white">
              Aviso Legal
            </a>
            <a href="/privacidad" className="hover:text-white">
              Privacidad
            </a>
            <a href="/accesibilidad" className="hover:text-white">
              Accesibilidad
            </a>
          </div>
        </div>
      </div>

      {/* Logo UNED */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container-omipyme flex items-center justify-center gap-2 py-4">
          <span className="text-xs text-gray-600">Una iniciativa de</span>
          <a
            href="https://www.uned.ac.cr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/logos/uned-logo-white.png"
              alt="UNED Costa Rica"
              className="h-6 w-auto opacity-50 transition hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
