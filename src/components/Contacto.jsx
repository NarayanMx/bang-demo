import React, { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes conectar tu servicio de envíos (Formspree, EmailJS, backend propio, etc.)
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      setFormData({ nombre: '', email: '', mensaje: '' });
    }, 4000);
  };

  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* Resplandor de fondo con la paleta de acentos */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-olive) 0%, var(--color-brand-deep) 70%, transparent 100%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Encabezado de la sección */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-olive bg-brand-dark/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-light" />
            <span className="text-xs uppercase tracking-widest text-brand-light font-medium">
              Hablemos
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            ¿Tienes un proyecto en mente?
          </h2>
          
          <p className="text-brand-muted max-w-xl mx-auto text-base sm:text-lg font-light">
            Envíame un mensaje directo o contáctame mediante cualquiera de mis redes. Estaré encantado de dar vida a tu idea.
          </p>
        </div>

        {/* Grid Principal: Formulario + Información de contacto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda: Tarjetas de información directa */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-brand-olive/40 bg-brand-dark/20 backdrop-blur-sm space-y-3">
              <span className="text-xs uppercase tracking-wider text-brand-muted font-semibold">Correo Electrónico</span>
              <p className="text-lg font-medium text-white">hola@tu-dominio.com</p>
              <p className="text-xs text-brand-muted">Respuesta habitualmente en menos de 24 horas.</p>
            </div>

            <div className="p-6 rounded-2xl border border-brand-olive/40 bg-brand-dark/20 backdrop-blur-sm space-y-3">
              <span className="text-xs uppercase tracking-wider text-brand-muted font-semibold">Ubicación</span>
              <p className="text-lg font-medium text-white">Zapopan, Jalisco, México</p>
              <p className="text-xs text-brand-muted">Disponible para proyectos remotos y locales.</p>
            </div>

            <div className="p-6 rounded-2xl border border-brand-olive/40 bg-brand-dark/20 backdrop-blur-sm space-y-3">
              <span className="text-xs uppercase tracking-wider text-brand-muted font-semibold">Redes & Código</span>
              <div className="flex gap-4 pt-1">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-medium rounded-lg border border-brand-olive text-brand-light hover:bg-brand-olive/30 transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-medium rounded-lg border border-brand-olive text-brand-light hover:bg-brand-olive/30 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario de contacto */}
          <div className="lg:col-span-7 p-8 rounded-3xl border border-brand-olive/50 bg-brand-dark/30 backdrop-blur-md relative">
            
            {enviado ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-brand-olive/30 text-brand-light mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado!</h3>
                <p className="text-brand-muted text-sm max-w-sm mx-auto">
                  Gracias por ponerte en contacto. Te responderé lo antes posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-xs font-medium text-brand-muted uppercase tracking-wider mb-2">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-brand-olive/50 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-light transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-brand-muted uppercase tracking-wider mb-2">
                    Tu Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-brand-olive/50 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-light transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-xs font-medium text-brand-muted uppercase tracking-wider mb-2">
                    Detalles del Proyecto / Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="5"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu idea, objetivos o requerimientos..."
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-brand-olive/50 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-light transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-black font-semibold bg-brand-light hover:bg-brand-muted hover:text-white transition-all duration-300 shadow-lg shadow-brand-light/10 active:scale-[0.99] text-center text-sm"
                >
                  Enviar Mensaje
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}