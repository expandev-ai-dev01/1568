export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Italiano</h3>
            <p className="text-gray-400">
              Restaurante italiano autêntico com os melhores pratos da culinária italiana.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/cardapio" className="text-gray-400 hover:text-white transition-colors">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="/galeria" className="text-gray-400 hover:text-white transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Telefone: (11) 1234-5678</li>
              <li>Email: contato@italiano.com</li>
              <li>Endereço: Rua Exemplo, 123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Italiano. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
