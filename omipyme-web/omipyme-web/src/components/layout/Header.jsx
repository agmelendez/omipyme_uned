import { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const navigation = [
  {
    name: 'Observatorio',
    href: '/observatorio',
    submenu: [
      { name: 'Encuesta Nacional', href: '/observatorio/encuesta-nacional' },
      { name: 'Dashboards', href: '/observatorio/dashboards' },
      { name: 'Indicadores', href: '/observatorio/indicadores' },
      { name: 'Datos Abiertos', href: '/observatorio/datos-abiertos' },
      { name: 'Metodología', href: '/observatorio/metodologia' },
    ],
  },
  {
    name: 'Herramientas',
    href: '/herramientas',
    submenu: [
      { name: 'Selfie Distrital', href: '/herramientas/selfie-distrital' },
      { name: 'Territorio Vivo', href: '/herramientas/territorio-vivo' },
      { name: 'OBI Chatbot', href: '/herramientas/obi' },
      { name: 'Asistente IA', href: '/herramientas/asistente-ia' },
      { name: 'API', href: '/herramientas/api' },
    ],
  },
  {
    name: 'Investigación',
    href: '/investigacion',
    submenu: [
      { name: 'Publicaciones', href: '/investigacion/publicaciones' },
      { name: 'Proyectos', href: '/investigacion/proyectos' },
      { name: 'Equipo', href: '/investigacion/equipo' },
      { name: 'Colaboraciones', href: '/investigacion/colaboraciones' },
    ],
  },
  {
    name: 'Formación',
    href: '/formacion',
    submenu: [
      { name: 'Bachillerato', href: '/formacion/bachillerato' },
      { name: 'Cursos', href: '/formacion/cursos' },
      { name: 'Toolkits', href: '/formacion/toolkits' },
      { name: 'Podcast', href: '/formacion/podcast' },
      { name: 'Audiolibros', href: '/formacion/audiolibros' },
    ],
  },
  {
    name: 'Ecosistema',
    href: '/ecosistema',
    submenu: [
      { name: 'Ferias', href: '/ecosistema/ferias' },
      { name: 'Eventos', href: '/ecosistema/eventos' },
      { name: 'Academia de Empresarias', href: '/ecosistema/academia-empresarias' },
      { name: 'Aliados', href: '/ecosistema/aliados' },
      { name: 'Trámites', href: '/ecosistema/tramites' },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container-omipyme" aria-label="Navegación principal">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/assets/logos/omipyme-logo.png"
                alt="OMiPYME"
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <span className="block text-lg font-bold text-uned-blue">
                  OMiPYME
                </span>
                <span className="block text-xs text-gray-500">
                  UNED Costa Rica
                </span>
              </div>
            </a>
          </div>

          {/* Navegación desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-uned-blue"
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  )}
                </a>

                {/* Dropdown */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-56 animate-slide-down rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-uned-blue"
                      >
                        {subitem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-2">
            {/* Buscar */}
            <button
              className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-uned-blue"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Contacto */}
            <a
              href="/contacto"
              className="hidden rounded-lg bg-uned-blue px-4 py-2 text-sm font-medium text-white transition hover:bg-pilar-observatorio sm:block"
            >
              Contacto
            </a>

            {/* Menú móvil */}
            <button
              className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="border-t py-4 lg:hidden">
            {navigation.map((item) => (
              <div key={item.name} className="mb-2">
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-2 font-medium text-gray-900 hover:bg-gray-100"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.name}
                        href={subitem.href}
                        className="block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-uned-blue"
                      >
                        {subitem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 border-t pt-4">
              <a
                href="/contacto"
                className="block rounded-lg bg-uned-blue px-4 py-2 text-center font-medium text-white"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
