import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white border-t border-brand-olive/30 py-12 px-6 overflow-hidden">
      {/* Resplandor sutil en la parte inferior */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[150px] rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-light) 0%, var(--color-brand-olive) 60%, transparent 100%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Marca / Branding */}
        <div className="space-y-2 text-center md:text-left">
          <a href="#hero" className="text-xl font-extrabold tracking-tight text-white hover:text-brand-light transition-colors">
            Portafolio<span className="text-brand-light">.</span>
          </a>
          <p className="text-xs text-brand-muted max-w-sm font-light">
            Diseño y desarrollo de sitios web modernos, rápidos y orientados a resultados.
          </p>
        </div>

        {/* Enlaces de Navegación Rápida */}
        <nav className="flex flex-wrap justify-center gap-6 text-xs text-brand-muted font-medium">
          <a href="#hero" className="hover:text-brand-light transition-colors">Inicio</a>
          <a href="#gallery" className="hover:text-brand-light transition-colors">Galería</a>
          <a href="#cotizador" className="hover:text-brand-light transition-colors">Cotizador</a>
          <a href="#resenas" className="hover:text-brand-light transition-colors">Reseñas</a>
          <a href="#contacto" className="hover:text-brand-light transition-colors">Contacto</a>
        </nav>

        {/* Derechos de Autor & Status */}
        <div className="flex flex-col items-center md:items-end gap-2 text-xs text-brand-muted">
          <p>© {currentYear} Todos los derechos reservados.</p>
          <div className="inline-flex items-center gap-2 text-[11px] text-brand-muted/80">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-light" />
            <span>Construido con React & Tailwind v4</span>
          </div>
        </div>

      </div>
    </footer>
  );
}