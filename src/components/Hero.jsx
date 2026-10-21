import React, { useEffect } from 'react';
// Importa tu retrato de Keith desde la carpeta de assets
import KeithPortrait from '../assets/Images/hero_bang.webp';

export default function Hero() {
  // Observador para animar los titulares conforme el usuario hace scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-6 py-24 md:py-32">
      
      {/* Resplandores de fondo con gradientes de la paleta */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-light) 0%, var(--color-brand-olive) 50%, transparent 100%)'
        }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-deep) 0%, var(--color-brand-dark) 60%, transparent 100%)'
        }}
      />

      {/* Grid de puntos sutil */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--color-brand-muted) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Contenedor Principal */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        
        {/* Fila 1: Hero split - Texto y Retrato de Keith */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Bloque Izquierdo: Textos y CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center flex flex-col items-center">
            
            {/* Titular Principal */}
            <h1 className="font-gothic text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Bang Bang <br className="hidden sm:block" />
              <span className="font-display text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand-muted to-white">
                by Keith McCurdy.
              </span>
            </h1>

            {/* H2 N°1: Subtítulo con Gradiente de Acero Pizarra + Animación al Scroll */}
            <h2 className="scroll-reveal font-sans opacity-0 translate-y-8 transition-all duration-1000 ease-out font-sans text-3xl sm:text-5xl tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-slate-200 to-brand-muted">
              Where Art Meets Skin
            </h2>

            {/* Subtítulo */}
            <p className="max-w-xl mx-auto text-base sm:text-lg text-brand-muted font-light leading-relaxed">
              La firma detrás de las piezas más icónicas del mundo. De las calles de Nueva York a la piel de las mayores estrellas globales.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#gallery"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-white font-medium bg-brand-dark/60 hover:bg-brand-dark border border-brand-olive transition-all duration-300 backdrop-blur-sm active:scale-95 text-center"
              >
                Ver Galería
              </a>
            </div>
          </div>

          {/* Bloque Derecho: Retrato con iluminación de acento */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute inset-0 bg-brand-light/20 blur-3xl rounded-full transform scale-75 pointer-events-none" />
            
            <div className="relative rounded-3xl border border-brand-olive/40 overflow-hidden bg-brand-dark/30 backdrop-blur-sm shadow-2xl w-full max-w-sm md:max-w-md lg:max-w-full">
              <img 
                src={KeithPortrait} 
                alt="Keith McCurdy - Bang Bang" 
                className="w-full aspect-[4/5] object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Fila 2: Filosofía con H2 de Impacto al Scroll */}
        <div className="border-t border-brand-olive/20 pt-12 text-center space-y-6 max-w-4xl mx-auto">
          
          {/* H2 N°2: Título de Sección con Tipografía Eater / Display y Gradiente de la Paleta */}
          <h2 className="scroll-reveal font-sans opacity-0 translate-y-8 transition-all duration-1000 ease-out font-sans text-3xl sm:text-5xl tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-slate-200 to-brand-muted">
            Más que un estudio. <br className="sm:hidden" />
            <span className="font-sans text-brand-light block mt-2 text-2xl sm:text-4xl">
              Un templo del arte contemporáneo.
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-brand-muted font-light leading-relaxed">
            Fundado por Keith McCurdy, Bang Bang NYC revolucionó la industria del tatuaje al transformar una subcultura marginal en una experiencia de lujo y precisión quirúrgica. 
            Conocido por su dominio del microrrealismo, el sombreado suave y la innovación constante, Keith no solo marca la piel: inmortaliza momentos, historias y legados en cada línea.
          </p>
        </div>

        {/* Fila 3: Stats / Tarjetas decorativas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl border border-brand-olive/50 bg-brand-dark/20 backdrop-blur-sm space-y-2 text-center hover:border-brand-light/60 transition-colors">
            <h3 className="text-2xl font-bold text-brand-light font-display">15+ Años</h3>
            <p className="text-xs text-brand-muted">Refinando la vanguardia del arte corporal en Nueva York.</p>
          </div>
          <div className="p-6 rounded-2xl border border-brand-olive/50 bg-brand-dark/20 backdrop-blur-sm space-y-2 text-center hover:border-brand-light/60 transition-colors">
            <h3 className="text-2xl font-bold text-brand-light font-display">Custom Fine-Line</h3>
            <p className="text-xs text-brand-muted">Diseños a medida concebidos para fluir de forma natural con la anatomía del cuerpo.</p>
          </div>
          <div className="p-6 rounded-2xl border border-brand-olive/50 bg-brand-dark/20 backdrop-blur-sm space-y-2 text-center hover:border-brand-light/60 transition-colors">
            <h3 className="text-2xl font-bold text-brand-light font-display">Impulsor de la Industria</h3>
            <p className="text-xs text-brand-muted">Desarrollador de tecnologías pioneras en tintas y bioseguridad.</p>
          </div>
        </div>

      </div>
    </section>
  );
}