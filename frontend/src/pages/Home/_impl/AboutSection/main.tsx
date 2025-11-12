import { Link } from 'react-router-dom';

/**
 * @component AboutSection
 * @summary Seção sobre o restaurante com texto descritivo, imagem
 * ilustrativa e link para mais informações.
 * @domain home
 * @type ui-component
 * @category display
 *
 * @styling
 * - Variants: none
 * - Slots: none
 * - Responsive: Layout em coluna em mobile, duas colunas em desktop
 *
 * @accessibility
 * - ARIA: Estrutura semântica com section e headings
 * - Keyboard: Link navegável por teclado
 * - Screen Reader: Texto alternativo para imagem
 */
export const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nossa História</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Há mais de 20 anos, o Italiano traz para você o melhor da culinária italiana
              tradicional. Nossos pratos são preparados com ingredientes frescos e selecionados,
              seguindo receitas autênticas que passam de geração em geração.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Cada prato é uma celebração dos sabores da Itália, preparado com paixão e dedicação
              por nossa equipe de chefs experientes. Venha nos visitar e descubra por que somos
              referência em gastronomia italiana.
            </p>
            <Link
              to="/contato"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Saiba Mais
            </Link>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
              <div className="text-white text-center">
                <svg
                  className="w-24 h-24 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <p className="text-lg">Imagem do Restaurante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
