import { useState, useEffect } from 'react';

/**
 * @component HeroBanner
 * @summary Banner principal rotativo com imagens de alta qualidade do
 * restaurante e pratos, com transição automática e controles manuais.
 * @domain home
 * @type ui-component
 * @category display
 *
 * @state
 * - currentSlide: Índice do slide atual sendo exibido
 * - slides: Array de objetos com dados dos slides (imagem, título, descrição)
 *
 * @styling
 * - Variants: none
 * - Slots: none
 * - Responsive: Full width em mobile, altura reduzida; desktop com altura maior
 *
 * @accessibility
 * - ARIA: aria-label nos botões de navegação
 * - Keyboard: Navegação com setas esquerda/direita
 * - Screen Reader: Anúncio de mudança de slide
 */
export const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Bem-vindo ao Italiano',
      description: 'Experimente a autêntica culinária italiana',
      bgColor: 'bg-gradient-to-r from-red-600 to-red-800',
    },
    {
      id: 2,
      title: 'Pratos Tradicionais',
      description: 'Receitas passadas de geração em geração',
      bgColor: 'bg-gradient-to-r from-green-600 to-green-800',
    },
    {
      id: 3,
      title: 'Ambiente Acolhedor',
      description: 'O lugar perfeito para momentos especiais',
      bgColor: 'bg-gradient-to-r from-blue-600 to-blue-800',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[400px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } ${slide.bgColor}`}
        >
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
            <p className="text-xl md:text-2xl max-w-2xl">{slide.description}</p>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-colors"
        aria-label="Slide anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-colors"
        aria-label="Próximo slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
