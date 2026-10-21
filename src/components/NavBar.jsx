import React, { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Reseñas', href: '#resenas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-6 py-3 rounded-2xl border border-brand-olive/40 bg-black/70 backdrop-blur-md shadow-lg shadow-black/50">
          
          {/* Logo / Nombre */}
          <a href="#hero" className="font-gothic text-lg font-extrabold tracking-tight text-white hover:text-brand-light transition-colors">
            BangBang<span className="text-brand-light">.</span>
          </a>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-brand-muted">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-light transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

  
          {/* Botón Menú Hamburguesa (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-light hover:text-white focus:outline-none"
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

        {/* Desplegable Mobile */}
        {isOpen && (
          <div className="md:hidden mt-2 p-6 rounded-2xl border border-brand-olive/40 bg-black/95 backdrop-blur-xl space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-brand-muted hover:text-brand-light transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </header>
  );
}