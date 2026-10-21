import React from 'react';

export default function Contacto() {
  const phoneNumber = '523311934925'; // Número de WhatsApp Bang Bang
  const defaultMessage = encodeURIComponent(
    'Hola Keith, me gustaría solicitar información y cotizar una cita para un proyecto de tatuaje.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <section id="contacto" className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* Resplandor ambiental de fondo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-olive) 0%, var(--color-brand-deep) 70%, transparent 100%)'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        
        {/* Encabezado */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-olive bg-brand-dark/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-brand-light font-medium">
              Contacto & Ubicación
            </span>
          </div>
          
          <h2 className="scroll-reveal font-sans opacity-0 translate-y-8 transition-all duration-1000 ease-out font-sans text-3xl sm:text-5xl tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-slate-200 to-brand-muted">
            Inmortaliza tu Idea
          </h2>
          
          <p className="text-brand-muted max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Envíame tus referencias, la zona y el tamaño aproximado para darte un estimado directo.
          </p>

          {/* CTA Principal a WhatsApp */}
          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold bg-brand-dark hover:bg-brand-dark transition-all duration-300 shadow-xl shadow-brand-light/20 active:scale-95 text-sm uppercase tracking-wider"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Iniciar Cotización por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Grid de Información de Contacto + Mini Mapa de Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6 text-left">
          
          {/* Tarjetas de Información */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="p-6 rounded-2xl border border-brand-olive/40 bg-brand-dark/20 backdrop-blur-sm space-y-2">
              <span className="text-xs uppercase tracking-wider text-brand-muted font-semibold">Ubicación del Estudio</span>
              <p className="text-base font-medium text-white">SoHo, New York City</p>
              <p className="text-xs text-brand-muted">Grand St, New York, NY 10013, EE. UU.</p>
            </div>

            <div className="p-6 rounded-2xl border border-brand-olive/40 bg-brand-dark/20 backdrop-blur-sm space-y-2">
              <span className="text-xs uppercase tracking-wider text-brand-muted font-semibold">Correo Directo</span>
              <p className="text-base font-medium text-white">appts@bangbangforever.com</p>
              <p className="text-xs text-brand-muted">Atención exclusiva previa cita</p>
            </div>

            <div className="p-6 rounded-2xl border border-brand-olive/40 bg-brand-dark/20 backdrop-blur-sm space-y-2">
              <span className="text-xs uppercase tracking-wider text-brand-muted font-semibold">Instagram Oficial</span>
              <a 
                href="https://www.instagram.com/bangbangnyc" 
                target="_blank" 
                rel="noreferrer"
                className="text-base font-medium text-brand-light hover:underline block"
              >
                @bangbangnyc
              </a>
              <p className="text-xs text-brand-muted">Procesos, flashes y obras diarias</p>
            </div>

          </div>

          {/* Mini Mapa interactivo de Google Maps con estilizado oscuro */}
          <div className="lg:col-span-7 relative min-h-[320px] rounded-2xl border border-brand-olive/40 overflow-hidden bg-brand-dark/30 shadow-2xl">
            <iframe
              title="Ubicación Bang Bang Tattoo SoHo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.513361491741!2d-74.002824!3d40.722129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598be698f1a1%3A0x6b107e35b71db30!2sGrand%20St%2C%20New%20York%2C%20NY%2010013!5e0!3m2!1ses!2sus!4v1700000000000!5m2!1ses!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

        </div>

      </div>
    </section>
  );
}