import React, { useState, useEffect } from 'react';

// Importación directa de las imágenes según tu estructura de carpetas
import img1 from '../assets/Images/1.webp';
import img2 from '../assets/Images/2.webp';
import img3 from '../assets/Images/3.webp';
import img4 from '../assets/Images/4.webp';
import img5 from '../assets/Images/5.webp';
import img6 from '../assets/Images/6.webp';
import img7 from '../assets/Images/7.webp';
import img8 from '../assets/Images/8.webp';
import img9 from '../assets/Images/9.webp';
import img10 from '../assets/Images/10.webp';

const images = [
  { id: 1, src: img1, title: '' },
  { id: 2, src: img2, title: '' },
  { id: 3, src: img3, title: '' },
  { id: 4, src: img4, title: '' },
  { id: 5, src: img5, title: '' },
  { id: 6, src: img6, title: '' },
  { id: 7, src: img7, title: '' },
  { id: 8, src: img8, title: '' },
  { id: 9, src: img9, title: '' },
  { id: 10, src: img10, title: '' },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estado para capturar gestos de deslizamiento táctil (Swipe)
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Autoplay del carrusel cada 4 segundos (solo si el modal está cerrado)
  useEffect(() => {
    if (isPaused || isModalOpen) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, isModalOpen]);

  // Navegación por teclado (Escape para cerrar, Flechas para deslizar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === 'Escape') {
        setIsModalOpen(false);
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Manejo de gestos táctiles (Swipe)
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50; // Umbral mínimo de píxeles para detectar swipe

    if (distance > minSwipeDistance) {
      // Deslizar a la izquierda -> Siguiente imagen
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Deslizar a la derecha -> Imagen anterior
      prevSlide();
    }

    // Reiniciar valores táctiles
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* Resplandor de fondo con la paleta de colores */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-olive) 0%, var(--color-brand-dark) 70%, transparent 100%)'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        
        {/* Encabezado */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-olive bg-brand-dark/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-light" />
            <span className="text-xs uppercase tracking-widest text-brand-light font-medium">
              Galería
            </span>
          </div>

          <h2 className="scroll-reveal font-sans opacity-0 translate-y-8 transition-all duration-1000 ease-out font-sans text-3xl sm:text-5xl tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-slate-200 to-brand-muted">
            Del lienzo de la mente al lienzo de la piel.
          </h2>

          <p className="text-brand-muted max-w-xl mx-auto text-base sm:text-lg font-light">
            Obras icónicas llevadas a cabo por Keith "Bang Bang" McCurdy y nuestro colectivo de artistas residentes. Precisión técnica y estética de vanguardia en cada trazo.
          </p>
        </div>

        {/* Carrusel Principal */}
        <div 
          className="relative group max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Marco e Imagen Principal */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-3xl border border-brand-olive/50 bg-brand-dark/30 backdrop-blur-sm shadow-2xl cursor-pointer"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title || `Galería ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Overlay indicativo al pasar el mouse */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="px-4 py-2 rounded-full border border-brand-light bg-black/60 text-brand-light text-xs uppercase tracking-wider backdrop-blur-md">
                Haz clic para ampliar
              </span>
            </div>

            {/* Degradado inferior para el contador */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-10 pointer-events-none">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-brand-light font-mono">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </span>
                {images[currentIndex].title && (
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {images[currentIndex].title}
                  </h3>
                )}
              </div>
            </div>
          </div>

          {/* Botón Flecha Izquierda (Carrusel Principal) */}
          <button
            onClick={prevSlide}
            aria-label="Imagen anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-brand-dark/70 border border-brand-olive text-brand-light hover:bg-brand-light hover:text-black transition-all duration-300 backdrop-blur-md opacity-80 group-hover:opacity-100 active:scale-90"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Botón Flecha Derecha (Carrusel Principal) */}
          <button
            onClick={nextSlide}
            aria-label="Siguiente imagen"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-brand-dark/70 border border-brand-olive text-brand-light hover:bg-brand-light hover:text-black transition-all duration-300 backdrop-blur-md opacity-80 group-hover:opacity-100 active:scale-90"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* Indicadores de puntos (Dots) */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {images.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir a la imagen ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-brand-light'
                  : 'w-2 bg-brand-olive/50 hover:bg-brand-muted'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Ventana Modal / Lightbox Interactivo */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300 select-none"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Botón Cerrar Modal */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/60 border border-brand-olive/50 text-brand-light hover:text-white hover:border-brand-light transition-all cursor-pointer"
            aria-label="Cerrar modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Flecha Izquierda (Modal Desktop) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Imagen anterior"
            className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/60 border border-brand-olive/60 text-brand-light hover:bg-brand-light hover:text-black transition-all duration-300 backdrop-blur-md active:scale-90 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Flecha Derecha (Modal Desktop) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Siguiente imagen"
            className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/60 border border-brand-olive/60 text-brand-light hover:bg-brand-light hover:text-black transition-all duration-300 backdrop-blur-md active:scale-90 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Contenedor e Imagen Ampliada con eventos táctiles (Swipe) */}
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title || `Galería amplia ${currentIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-brand-olive/40 shadow-2xl transition-all duration-300"
            />

            {/* Contador e Indicador en Modal */}
            <div className="mt-4 text-center space-y-1">
              <span className="text-xs uppercase tracking-widest text-brand-light font-mono block">
                {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
              <p className="text-[11px] text-brand-muted sm:hidden">
                (Desliza hacia los lados para navegar)
              </p>
            </div>
          </div>

        </div>
      )}
    </section>
  );
}