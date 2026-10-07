import React, { useState } from 'react';

export default function Cotizador() {
  // Opciones de tipo de proyecto
  const tiposProyecto = [
    { id: 'landing', nombre: 'Landing Page', precio: 3500, desc: 'Ideal para promocionar un producto, servicio o evento.' },
    { id: 'corporativo', nombre: 'Sitio Web Corporativo', precio: 7500, desc: 'Sitio multipágina para empresas o profesionales.' },
    { id: 'ecommerce', nombre: 'Tienda en Línea', precio: 12000, desc: 'Catálogo de productos, carrito de compras y pasarela de pago.' },
  ];

  // Adicionales
  const extrasList = [
    { id: 'seo', nombre: 'Optimización SEO Básica', precio: 1500 },
    { id: 'cms', nombre: 'Panel Administrable (CMS)', precio: 2500 },
    { id: 'copywriting', nombre: 'Redacción de Contenidos', precio: 1200 },
    { id: 'multilenguaje', nombre: 'Soporte Multilenguaje', precio: 2000 },
  ];

  // Estados
  const [tipoSeleccionado, setTipoSeleccionado] = useState(tiposProyecto[0]);
  const [extrasSeleccionados, setExtrasSeleccionados] = useState([]);

  // Alternar selección de extras
  const toggleExtra = (extra) => {
    if (extrasSeleccionados.some((e) => e.id === extra.id)) {
      setExtrasSeleccionados(extrasSeleccionados.filter((e) => e.id !== extra.id));
    } else {
      setExtrasSeleccionados([...extrasSeleccionados, extra]);
    }
  };

  // Cálculo del total estimado
  const totalEstimado =
    tipoSeleccionado.precio +
    extrasSeleccionados.reduce((acc, curr) => acc + curr.precio, 0);

  // Formato de moneda (MXN / USD)
  const formatPrecio = (monto) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      maximumFractionDigits: 0,
    }).format(monto);
  };

  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* Resplandor de fondo */}
      <div 
        className="absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full blur-[150px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-light) 0%, var(--color-brand-olive) 60%, transparent 100%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-olive bg-brand-dark/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-light" />
            <span className="text-xs uppercase tracking-widest text-brand-light font-medium">
              Presupuesto Transparente
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Cotizador de Proyectos Web
          </h2>

          <p className="text-brand-muted max-w-xl mx-auto text-base sm:text-lg font-light">
            Calcula una estimación rápida según los requerimientos de tu proyecto en pocos clics.
          </p>
        </div>

        {/* Grid Interactivo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Opciones (Columna Izquierda / Centro) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Paso 1: Tipo de Proyecto */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-brand-muted font-semibold">
                1. Selecciona el tipo de sitio web
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tiposProyecto.map((tipo) => {
                  const isSelected = tipoSeleccionado.id === tipo.id;
                  return (
                    <button
                      key={tipo.id}
                      type="button"
                      onClick={() => setTipoSeleccionado(tipo)}
                      className={`p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between space-y-3 cursor-pointer ${
                        isSelected
                          ? 'border-brand-light bg-brand-dark/80 ring-1 ring-brand-light shadow-lg shadow-brand-light/10'
                          : 'border-brand-olive/40 bg-brand-dark/20 hover:border-brand-olive hover:bg-brand-dark/40'
                      }`}
                    >
                      <div>
                        <h4 className="font-bold text-white text-base">{tipo.nombre}</h4>
                        <p className="text-xs text-brand-muted mt-1 leading-relaxed">{tipo.desc}</p>
                      </div>
                      <span className="text-sm font-semibold text-brand-light pt-2">
                        {formatPrecio(tipo.precio)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso 2: Características adicionales */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-brand-muted font-semibold">
                2. Añade funcionalidades adicionales
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {extrasList.map((extra) => {
                  const isChecked = extrasSeleccionados.some((e) => e.id === extra.id);
                  return (
                    <div
                      key={extra.id}
                      onClick={() => toggleExtra(extra)}
                      className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer select-none ${
                        isChecked
                          ? 'border-brand-light bg-brand-olive/30 text-white'
                          : 'border-brand-olive/40 bg-brand-dark/20 hover:border-brand-olive text-brand-muted hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                          isChecked ? 'border-brand-light bg-brand-light text-black' : 'border-brand-olive'
                        }`}>
                          {isChecked && (
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm font-medium">{extra.nombre}</span>
                      </div>
                      <span className="text-xs font-semibold text-brand-light">
                        +{formatPrecio(extra.precio)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Resumen / Cotización Total (Columna Derecha) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl border border-brand-olive/50 bg-brand-dark/30 backdrop-blur-md space-y-6 lg:sticky lg:top-8">
            <h3 className="text-lg font-bold text-white border-b border-brand-olive/40 pb-4">
              Resumen de Cotización
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-brand-muted">
                <span>{tipoSeleccionado.nombre}</span>
                <span className="text-white font-medium">{formatPrecio(tipoSeleccionado.precio)}</span>
              </div>

              {extrasSeleccionados.map((extra) => (
                <div key={extra.id} className="flex justify-between text-brand-muted text-xs">
                  <span>+ {extra.nombre}</span>
                  <span className="text-white font-medium">{formatPrecio(extra.precio)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-brand-olive/40 pt-4 space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-xs uppercase tracking-wider text-brand-muted font-semibold">Total Estimado</span>
                <span className="text-2xl font-extrabold text-brand-light">{formatPrecio(totalEstimado)}</span>
              </div>
              <p className="text-[10px] text-brand-muted/70 leading-normal">
                *Los precios son una estimación inicial. El costo final dependerá del alcance detallado.
              </p>
            </div>

            <a
              href="#contacto"
              className="block w-full py-3.5 rounded-xl text-black font-semibold bg-brand-light hover:bg-brand-muted hover:text-white transition-all duration-300 text-center text-sm shadow-lg shadow-brand-light/10 active:scale-95"
            >
              Solicitar esta propuesta
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}