import React, { useState } from 'react';

const faqItems = [
  {
    id: 1,
    pregunta: '¿Cómo puedo agenda una cita o consultar disponibilidad?',
    respuesta: 'Las citas se gestionan directamente a través de nuestro canal oficial de WhatsApp o correo electrónico. Te recomendamos enviar tus referencias, zona del cuerpo y dimensiones aproximadas para darte un estimado directo.',
  },
  {
    id: 2,
    pregunta: '¿Cuál es el tiempo de espera promedio para una sesión?',
    respuesta: 'El tiempo de espera varía según la agenda de nuestros artistas y los giros de las giras internacionales. Por lo general, las fechas locales en SoHo se agendan con 2 a 4 semanas de anticipación.',
  },
  {
    id: 3,
    pregunta: '¿Se requiere un depósito previo para apartar mi fecha?',
    respuesta: 'Sí, para confirmar y congelar cualquier fecha en la agenda oficial del estudio se solicita un depósito de reserva no reembolsable, el cual se deduce del costo total final de tu pieza.',
  },
  {
    id: 4,
    pregunta: '¿Puedo ver el diseño antes del día de la cita?',
    respuesta: 'Por políticas de propiedad intelectual y adaptación anatómica, los diseños se presentan e imprimen en stencil el mismo día de tu sesión para ajustarlos en vivo sobre tu cuerpo.',
  },
  {
    id: 5,
    pregunta: '¿Aceptan acompañantes en la sesión?',
    respuesta: 'Por protocolos sanitarios y de bioseguridad en las áreas de trabajo del estudio, se permite únicamente un (1) acompañante por cliente en la zona de recepción.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* Resplandor ambiental de fondo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-olive) 0%, var(--color-brand-deep) 70%, transparent 100%)'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        
        {/* Encabezado */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-olive bg-brand-dark/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-brand-light font-medium">
              Información & Dudas
            </span>
          </div>

          <h2 className="scroll-reveal font-sans opacity-0 translate-y-8 transition-all duration-1000 ease-out font-sans text-3xl sm:text-5xl tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-slate-200 to-brand-muted">
            Preguntas Frecuentes
          </h2>

          <p className="text-brand-muted max-w-xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Resolvemos tus dudas principales antes de agendar tu sesión en el estudio.
          </p>
        </div>

        {/* Lista de Acordeones */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isExpanded = openIndex === idx;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-brand-olive bg-brand-dark/40 shadow-lg shadow-black/50'
                    : 'border-brand-olive/30 bg-black/50 hover:border-brand-olive/60'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isExpanded ? null : idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-semibold text-sm sm:text-base text-white cursor-pointer focus:outline-none"
                >
                  <span className="pr-4">{item.pregunta}</span>
                  <span className={`text-xs text-brand-light font-mono transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-5 text-sm text-brand-muted leading-relaxed font-light border-t border-brand-olive/20 pt-4 animate-in fade-in duration-200">
                    {item.respuesta}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}