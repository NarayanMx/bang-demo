import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-6 py-20">
      
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

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-olive bg-brand-dark/40 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-brand-light font-medium">
            Solicitar una Cita / Inquire for Booking
          </span>
        </div>

        {/* Titular */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Bang Bang by Keith McCurdy <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand-muted to-white">
            Where Art Meets Skin.
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-brand-muted font-light leading-relaxed">
          La firma detrás de las piezas más icónicas del mundo. De las calles de Nueva York a la piel de las mayores estrellas globales.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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


        {/* Subtítulo */}

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Más que un estudio. Un templo del arte contemporáneo. <br className="hidden sm:block" />
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-brand-muted font-light leading-relaxed">
          Fundado por Keith McCurdy, Bang Bang NYC revolucionó la industria del tatuaje al transformar una subcultura marginal en una experiencia de lujo y precisión quirúrgica.

          Conocido por su dominio del microrrealismo, el sombreado suave y la innovación constante en pigmentos y técnicas, Keith no solo marca la piel: inmortaliza momentos, historias y legados en cada línea.
        </p>
        </h2>

        {/* Stats / Tarjetas decorativas */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-12 max-w-3xl mx-auto">
          <div className="p-4 rounded-2xl border border-brand-olive/50 bg-brand-dark/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-brand-light">15+ Años</h3>
            <p className="text-xs text-brand-muted mt-1">refinando la vanguardia del arte corporal en Nueva York.</p>
          </div>
          <div className="p-4 rounded-2xl border border-brand-olive/50 bg-brand-dark/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-brand-light">Custom Fine-Line & Realism</h3>
            <p className="text-xs text-brand-muted mt-1">Diseños a medida concebidos para fluir de forma natural con la anatomía y los contornos del cuerpo.</p>
          </div>
          <div className="col-span-2 md:col-span-1 p-4 rounded-2xl border border-brand-olive/50 bg-brand-dark/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-brand-light">Impulsor de la Industria</h3>
            <p className="text-xs text-brand-muted mt-1">Desarrollador de tecnologías pioneras en tintas y bioseguridad.</p>
          </div>
        </div>

      </div>
    </section>
  );
}