import React from 'react';
// Importa tu retrato de Keith desde la carpeta de assets (ajusta la ruta si es necesario)
import KeithPortrait from '../assets/Images/hero_bang.webp';

export default function Hero() {
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
          
          {/* Bloque Izquierdo: Textos y CTAs (Centrados en todas las resoluciones) */}
          <div className="lg:col-span-7 space-y-6 text-center flex flex-col items-center">
            
            {/* Badge superior */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-olive bg-brand-dark/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-brand-light font-medium">
                Solicitar una Cita / Inquire for Booking
              </span>
            </div>

            {/* Titular */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Bang Bang <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand-muted to-white">
                by Keith McCurdy.
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold text-brand-light">
              Where Art Meets Skin.
            </h2>

            {/* Subtítulo */}
            <p className="max-w-xl mx-auto text-base sm:text-lg text-brand-muted font-light leading-relaxed">
              La firma detrás de las piezas más icónicas del mundo. De las calles de Nueva York a la piel de las mayores estrellas globales.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#cotizador"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-black font-semibold bg-brand-light hover:bg-brand-muted hover:text-white transition-all duration-300 shadow-lg shadow-brand-light/20 active:scale-95 text-center"
              >
                Cotizar Proyecto
              </a>

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
            {/* Brillo suave detrás de la foto */}
            <div className="absolute inset-0 bg-brand-light/20 blur-3xl rounded-full transform scale-75 pointer-events-none" />
            
            <div className="relative rounded-3xl border border-brand-olive/40 overflow-hidden bg-brand-dark/30 backdrop-blur-sm shadow-2xl w-full max-w-sm md:max-w-md lg:max-w-full">
              <img 
                src={KeithPortrait} 
                alt="Keith McCurdy - Bang Bang" 
                className="w-full aspect-[4/5] object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              {/* Overlay de gradiente para fusionarlo con el fondo negro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Fila 2: Filosofía / Introducción */}
        <div className="border-t border-brand-olive/20 pt-12 text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Más que un estudio. <br className="sm:hidden" /> Un templo del arte contemporáneo.
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-brand-muted font-light leading-relaxed">
            Fundado por Keith McCurdy, Bang Bang NYC revolucionó la industria del tatuaje al transformar una subcultura marginal en una experiencia de lujo y precisión quirúrgica. 
            Conocido por su dominio del microrrealismo, el sombreado suave y la innovación constante, Keith no solo marca la piel: inmortaliza momentos, historias y legados en cada línea.
          </p>
        </div>

        {/* Fila 3: Stats / Tarjetas decorativas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl border border-brand-olive/50 bg-brand-dark/20 backdrop-blur-sm space-y-2 text-center">
            <h3 className="text-2xl font-bold text-brand-light">15+ Años</h3>
            <p className="text-xs text-brand-muted">Refinando la vanguardia del arte corporal en Nueva York.</p>
          </div>
          <div className="p-6 rounded-2xl border border-brand-olive/50 bg-brand-dark/20 backdrop-blur-sm space-y-2 text-center">
            <h3 className="text-2xl font-bold text-brand-light">Custom Fine-Line</h3>
            <p className="text-xs text-brand-muted">Diseños a medida concebidos para fluir de forma natural con la anatomía y los contornos del cuerpo.</p>
          </div>
          <div className="p-6 rounded-2xl border border-brand-olive/50 bg-brand-dark/20 backdrop-blur-sm space-y-2 text-center">
            <h3 className="text-2xl font-bold text-brand-light">Impulsor de la Industria</h3>
            <p className="text-xs text-brand-muted">Desarrollador de tecnologías pioneras en tintas y bioseguridad.</p>
          </div>
        </div>

      </div>
    </section>
  );
}