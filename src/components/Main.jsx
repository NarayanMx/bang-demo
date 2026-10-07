import React from 'react';

export default function Main({ children }) {
  return (
    <main className="relative w-full overflow-hidden bg-black text-white">
      {/* Fondo decorativo sutil a nivel global */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--color-brand-light) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Renderizado de todas las secciones internas */}
      <div className="relative z-10 flex flex-col w-full">
        {children}
      </div>
    </main>
  );
}