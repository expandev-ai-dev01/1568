import { Link } from 'react-router-dom';

/**
 * @component FeaturedDishes
 * @summary Seção de pratos em destaque do cardápio com imagens,
 * descrições e link para o cardápio completo.
 * @domain home
 * @type ui-component
 * @category display
 *
 * @state
 * - dishes: Array de objetos com dados dos pratos em destaque
 *
 * @styling
 * - Variants: none
 * - Slots: none
 * - Responsive: Grid de 1 coluna em mobile, 2 em tablet, 3 em desktop
 *
 * @accessibility
 * - ARIA: Estrutura semântica com section e headings
 * - Keyboard: Cards e links navegáveis por teclado
 * - Screen Reader: Texto alternativo para imagens dos pratos
 */
export const FeaturedDishes = () => {
  const dishes = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      description: 'Massa fresca com molho cremoso de ovos, queijo pecorino e guanciale',
      category: 'Primeiro Prato',
      bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    },
    {
      id: 2,
      name: 'Risotto ai Funghi',
      description: 'Risoto cremoso com cogumelos porcini e parmesão',
      category: 'Primeiro Prato',
      bgColor: 'bg-gradient-to-br from-green-400 to-green-600',
    },
    {
      id: 3,
      name: 'Ossobuco alla Milanese',
      description: 'Ossobuco cozido lentamente com legumes e vinho branco',
      category: 'Segundo Prato',
      bgColor: 'bg-gradient-to-br from-red-400 to-red-600',
    },
    {
      id: 4,
      name: 'Tiramisù',
      description: 'Sobremesa clássica com café, mascarpone e cacau',
      category: 'Sobremesa',
      bgColor: 'bg-gradient-to-br from-amber-400 to-amber-600',
    },
    {
      id: 5,
      name: 'Bruschetta',
      description: 'Pão italiano tostado com tomate fresco, manjericão e azeite',
      category: 'Entrada',
      bgColor: 'bg-gradient-to-br from-red-300 to-red-500',
    },
    {
      id: 6,
      name: 'Panna Cotta',
      description: 'Sobremesa cremosa com calda de frutas vermelhas',
      category: 'Sobremesa',
      bgColor: 'bg-gradient-to-br from-pink-300 to-pink-500',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Pratos Especiais
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos pratos mais apreciados do nosso cardápio, preparados com ingredientes
            frescos e receitas tradicionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`h-48 ${dish.bgColor} flex items-center justify-center`}>
                <div className="text-white text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <p className="text-sm">Imagem do Prato</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{dish.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dish.name}</h3>
                <p className="text-gray-600">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/cardapio"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Ver Cardápio Completo
          </Link>
        </div>
      </div>
    </section>
  );
};
