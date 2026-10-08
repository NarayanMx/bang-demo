import React, { useState } from 'react';

export default function CotizadorBangBang() {
  // Precio base del estudio por sesión mínima
  const BASE_STUDIO_PRICE = 500;

  // 1. Estilo de Color
  const estilosColor = [
    { id: 'bg', nombre: 'Black & Grey', precio: 0, desc: 'Sombras suaves, graduación en tinta negra y grises.' },
    { id: 'color', nombre: 'Color Saturado', precio: 300, desc: 'Pigmentación rica en color y degradados fotográficos.' },
  ];

  // 2. Área del Cuerpo (Complejidad Anatómica)
  const zonasCuerpo = [
    { id: 'standard', nombre: 'Brazo / Antebrazo / Muslo', precio: 0, desc: 'Zonas de densidad y elasticidad estándar.' },
    { id: 'torso', nombre: 'Espalda / Pecho', precio: 200, desc: 'Lienzo amplio, requiere mayor tiempo de fijación.' },
    { id: 'sensitive', nombre: 'Costillas / Cuello / Abdomen', precio: 350, desc: 'Zonas de alta sensibilidad y textura delicada.' },
    { id: 'extremities', nombre: 'Manos / Pies / Articulaciones', precio: 400, desc: 'Máxima dificultad técnica y desgaste cutáneo.' },
  ];

  // 3. Técnica y Tamaño
  const tecnicasList = [
    { id: 'micro', nombre: 'Micro Tatuaje / Fine Line (1RL)', precio: 200 },
    { id: 'medium', nombre: 'Pieza Mediana (10-15 cm)', precio: 400 },
    { id: 'large', nombre: 'Pieza Grande / Media Manga', precio: 800 },
    { id: 'fullday', nombre: 'Sesión Día Completo (Full Day)', precio: 1200 },
  ];

  // Estados
  const [estiloColorSeleccionado, setEstiloColorSeleccionado] = useState(estilosColor[0]);
  const [zonaSeleccionada, setZonaSeleccionada] = useState(zonasCuerpo[0]);
  const [tecnicasSeleccionadas, setTecnicasSeleccionadas] = useState([]);

  // Alternar selección de técnicas
  const toggleTecnica = (tecnica) => {
    if (tecnicasSeleccionadas.some((t) => t.id === tecnica.id)) {
      setTecnicasSeleccionadas(tecnicasSeleccionadas.filter((t) => t.id !== tecnica.id));
    } else {
      setTecnicasSeleccionadas([...tecnicasSeleccionadas, tecnica]);
    }
  };

  // Cálculo del total estimado
  const totalEstimado =
    BASE_STUDIO_PRICE +
    estiloColorSeleccionado.precio +
    zonaSeleccionada.precio +
    tecnicasSeleccionadas.reduce((acc, curr) => acc + curr.precio, 0);

  // Formato de moneda en USD
  const formatPrecio = (monto) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(monto);
  };

  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* Resplandor de fondo con la paleta brand */}
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
              Project Estimator & Inquiries
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
            Estimador de Piezas
          </h2>

          <p className="text-brand-muted max-w-xl mx-auto text-base sm:text-lg font-light">
            Selecciona la zona del cuerpo, acabado y técnica para obtener una estimación preliminar de tu sesión en Nueva York.
          </p>
        </div>

        {/* Grid Interactivo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Opciones (Columna Izquierda / Centro) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Paso 1: Estilo de Color / B&N */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-brand-muted font-semibold">
                1. Estilo de Color
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {estilosColor.map((estilo) => {
                  const isSelected = estiloColorSeleccionado.id === estilo.id;
                  return (
                    <button
                      key={estilo.id}
                      type="button"
                      onClick={() => setEstiloColorSeleccionado(estilo)}
                      className={`p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between space-y-2 cursor-pointer ${
                        isSelected
                          ? 'border-brand-light bg-brand-dark/80 ring-1 ring-brand-light shadow-lg shadow-brand-light/10'
                          : 'border-brand-olive/40 bg-brand-dark/20 hover:border-brand-olive hover:bg-brand-dark/40'
                      }`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <h4 className="font-bold text-white text-base">{estilo.nombre}</h4>
                        <span className="text-xs font-semibold text-brand-light">
                          {estilo.precio > 0 ? `+${formatPrecio(estilo.precio)}` : 'Incluido'}
                        </span>
                      </div>
                      <p className="text-xs text-brand-muted leading-relaxed">{estilo.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso 2: Área del Cuerpo */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-brand-muted font-semibold">
                2. Área del Cuerpo a Tatuar
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {zonasCuerpo.map((zona) => {
                  const isSelected = zonaSeleccionada.id === zona.id;
                  return (
                    <button
                      key={zona.id}
                      type="button"
                      onClick={() => setZonaSeleccionada(zona)}
                      className={`p-4 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between space-y-2 cursor-pointer ${
                        isSelected
                          ? 'border-brand-light bg-brand-dark/80 ring-1 ring-brand-light'
                          : 'border-brand-olive/40 bg-brand-dark/20 hover:border-brand-olive hover:bg-brand-dark/40'
                      }`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <h4 className="font-medium text-white text-sm">{zona.nombre}</h4>
                        <span className="text-xs font-semibold text-brand-light">
                          {zona.precio > 0 ? `+${formatPrecio(zona.precio)}` : 'Estándar'}
                        </span>
                      </div>
                      <p className="text-[11px] text-brand-muted leading-relaxed">{zona.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso 3: Escala / Complejidad Técnica */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-brand-muted font-semibold">
                3. Dimensión y Especificaciones Técnicas
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tecnicasList.map((tecnica) => {
                  const isChecked = tecnicasSeleccionadas.some((t) => t.id === tecnica.id);
                  return (
                    <div
                      key={tecnica.id}
                      onClick={() => toggleTecnica(tecnica)}
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
                        <span className="text-sm font-medium">{tecnica.nombre}</span>
                      </div>
                      <span className="text-xs font-semibold text-brand-light">
                        +{formatPrecio(tecnica.precio)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Resumen / Cotización Total (Columna Derecha) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl border border-brand-olive/50 bg-brand-dark/30 backdrop-blur-md space-y-6 lg:sticky lg:top-8">
            <h3 className="text-lg font-bold text-white border-b border-brand-olive/40 pb-4 tracking-wide uppercase">
              Resumen de Valoración
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-brand-muted">
                <span>Sesión Base Studio</span>
                <span className="text-white font-medium">{formatPrecio(BASE_STUDIO_PRICE)}</span>
              </div>

              <div className="flex justify-between text-brand-muted">
                <span>Estilo: {estiloColorSeleccionado.nombre}</span>
                <span className="text-white font-medium">
                  {estiloColorSeleccionado.precio > 0 ? formatPrecio(estiloColorSeleccionado.precio) : '—'}
                </span>
              </div>

              <div className="flex justify-between text-brand-muted">
                <span>Zona: {zonaSeleccionada.nombre}</span>
                <span className="text-white font-medium">
                  {zonaSeleccionada.precio > 0 ? formatPrecio(zonaSeleccionada.precio) : '—'}
                </span>
              </div>

              {tecnicasSeleccionadas.map((tecnica) => (
                <div key={tecnica.id} className="flex justify-between text-brand-muted text-xs">
                  <span>+ {tecnica.nombre}</span>
                  <span className="text-white font-medium">{formatPrecio(tecnica.precio)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-brand-olive/40 pt-4 space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-xs uppercase tracking-wider text-brand-muted font-semibold">Inversión Estimada</span>
                <span className="text-2xl font-extrabold text-brand-light">{formatPrecio(totalEstimado)}</span>
              </div>
              <p className="text-[10px] text-brand-muted/70 leading-normal">
                *Todas las estimaciones son preliminares (USD). El valor definitivo se confirma tras la revisión directa del boceto y la anatomía.
              </p>
            </div>

            <a
              href="#booking"
              className="block w-full py-3.5 rounded-xl text-black font-semibold bg-brand-light hover:bg-brand-muted hover:text-white transition-all duration-300 text-center text-sm shadow-lg shadow-brand-light/10 active:scale-95 uppercase tracking-wider"
            >
              Agendar mi Cita
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}