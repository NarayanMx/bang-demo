import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Cotizador from './components/Cotizador';
import Reseñas from './components/Reseñas';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-light selection:text-black font-sans antialiased">
      {/* Barra de navegación superior fija */}
      <NavBar />

      {/* Contenedor principal con las secciones de la landing */}
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="cotizador">
          <Cotizador />
        </section>

        <section id="resenas">
          <Reseñas />
        </section>

        <section id="contacto">
          <Contacto />
        </section>
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}