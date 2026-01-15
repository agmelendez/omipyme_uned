import Head from 'next/head';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import PillarCards from '../components/home/PillarCards';
import FeaturedContent from '../components/home/FeaturedContent';

// Datos importados del JSON
import siteData from '../data/omipyme-data.json';

export default function Home() {
  const { organizacion, proyectos, publicaciones } = siteData;

  return (
    <>
      <Head>
        <title>OMiPYME - Observatorio de MiPYMES | UNED Costa Rica</title>
        <meta
          name="description"
          content={organizacion.descripcion}
        />
        <meta
          name="keywords"
          content="MIPYME, Costa Rica, emprendimiento, observatorio, UNED, pequeñas empresas, innovación"
        />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="OMiPYME - Observatorio de MiPYMES" />
        <meta property="og:description" content={organizacion.descripcion} />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <meta property="og:url" content="https://omipymes.uned.ac.cr" />
        <meta property="og:site_name" content="OMiPYME UNED" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OMiPYME - Observatorio de MiPYMES" />
        <meta name="twitter:description" content={organizacion.descripcion} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://omipymes.uned.ac.cr" />
      </Head>

      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />
          
          {/* Pilares */}
          <PillarCards />
          
          {/* Contenido destacado */}
          <FeaturedContent 
            proyectos={proyectos.activos.slice(0, 3)}
            publicaciones={publicaciones.informes.slice(0, 3)}
          />
          
          {/* Sección de aliados */}
          <section className="section bg-white">
            <div className="container-omipyme">
              <div className="section-header">
                <h2 className="section-title">Aliados Estratégicos</h2>
                <p className="section-subtitle">
                  Trabajamos en colaboración con instituciones públicas y privadas
                  para fortalecer el ecosistema MIPYME costarricense.
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-8 grayscale opacity-60">
                <img src="/assets/aliados/meic.svg" alt="MEIC" className="h-12" />
                <img src="/assets/aliados/sbd.svg" alt="SBD" className="h-12" />
                <img src="/assets/aliados/estado-nacion.svg" alt="Estado de la Nación" className="h-12" />
                <img src="/assets/aliados/tec.svg" alt="TEC" className="h-12" />
                <img src="/assets/aliados/faedpyme.svg" alt="FAEDPYME" className="h-12" />
              </div>
            </div>
          </section>
          
          {/* CTA Final */}
          <section className="bg-gradient-to-r from-uned-blue to-pilar-observatorio py-16 text-white">
            <div className="container-omipyme text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                ¿Tienes preguntas sobre el sector MIPYME?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
                Nuestro equipo de investigadores está listo para ayudarte. 
                Contáctanos para consultas, colaboraciones o solicitudes de datos.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contacto"
                  className="btn btn-lg bg-white text-uned-blue hover:bg-gray-100"
                >
                  Contactar al equipo
                </a>
                <a
                  href="/observatorio/datos-abiertos"
                  className="btn btn-lg border-2 border-white/30 bg-transparent hover:bg-white/10"
                >
                  Explorar datos abiertos
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

// Generación estática
export async function getStaticProps() {
  return {
    props: {},
  };
}
