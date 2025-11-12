export const MenuPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nosso Cardápio</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore nossa seleção de pratos autênticos da culinária italiana.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Categoria</h3>
            <p className="text-gray-600">Descrição dos pratos desta categoria.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
