import React from 'react';

const reseñas = [
  {
    id: 1,
    nombre: 'Valeria Gómez',
    puesto: 'Fundadora de Studio B',
    comentario: 'El trabajo en el desarrollo de la página superó nuestras expectativas. La navegación es fluide y el diseño oscuro resalta perfectamente el concepto de nuestra marca.',
    calificacion: 5,
    avatar: 'VG',
  },
  {
    id: 2,
    nombre: 'Ricardo Morales',
    puesto: 'Director Comercial',
    comentario: 'La herramienta de cotización y la integración con el formulario nos han ayudado a captar clientes potenciales de forma inmediata. Proceso claro y muy profesional.',
    calificacion: 5,
    avatar: 'RM',
  },
  {
    id: 3,
    nombre: 'Sofía Castro',
    puesto: 'Diseñadora de Moda',
    comentario: 'Excelente optimización en la velocidad de carga y en dispositivos móviles. La galería interactiva luce impecable para mostrar el portafolio.',
    calificacion: 5,
    avatar: 'SC',
  },
];

export default function Reseñas() {
  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* Resplandor ambiental de fondo */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-olive) 0%, var(--color-brand-deep) 70%, transparent 100%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        
        {/* Encabezado */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-olive bg-brand-dark/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-light" />
            <span className="text-xs uppercase tracking-widest text-brand-light font-medium">
              Testimonios
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Lo que dicen mis clientes
          </h2>

          <p className="text-brand-muted max-w-xl mx-auto text-base sm:text-lg font-light">
            Experiencias de trabajo colaborativo en el diseño y desarrollo de soluciones web.
          </p>
        </div>

        {/* Grid de Tarjetas de Reseña */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reseñas.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl border border-brand-olive/40 bg-brand-dark/20 backdrop-blur-sm flex flex-col justify-between space-y-6 hover:border-brand-olive transition-colors duration-300"
            >
              <div className="space-y-4">
                {/* Estrellas de Calificación */}
                <div className="flex items-center gap-1 text-brand-light">
                  {[...Array(item.calificacion)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Comentario */}
                <p className="text-sm text-brand-muted leading-relaxed font-light italic">
                  "{item.comentario}"
                </p>
              </div>

              {/* Información del Cliente */}
              <div className="flex items-center gap-4 pt-4 border-t border-brand-olive/30">
                <div className="w-10 h-10 rounded-full border border-brand-olive bg-brand-dark flex items-center justify-center font-semibold text-xs text-brand-light">
                  {item.avatar}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{item.nombre}</h3>
                  <p className="text-xs text-brand-muted">{item.puesto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}