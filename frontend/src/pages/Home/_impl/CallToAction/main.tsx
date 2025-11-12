import { Link } from 'react-router-dom';

/**
 * @component CallToAction
 * @summary Seção de chamada para ação com informações essenciais
 * (horário, endereço, telefone) e botões para contato e localização.
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
 * - Keyboard: Links e botões navegáveis por teclado
 * - Screen Reader: Ícones com texto alternativo
 */
export const CallToAction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visite-nos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para recebê-lo e proporcionar uma experiência gastronômica inesquecível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Horário</h3>
            <p className="text-gray-600">
              Terça a Domingo
              <br />
              12h às 23h
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Endereço</h3>
            <p className="text-gray-600">
              Rua Exemplo, 123
              <br />
              São Paulo, SP
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefone</h3>
            <p className="text-gray-600">
              <a href="tel:+551112345678" className="hover:text-blue-600 transition-colors">
                (11) 1234-5678
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contato"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
          >
            Entre em Contato
          </Link>
          <Link
            to="/contato"
            className="inline-block px-8 py-3 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors text-center"
          >
            Ver Localização
          </Link>
        </div>
      </div>
    </section>
  );
};
