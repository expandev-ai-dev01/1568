# Italiano - Restaurante Italiano

Uma página para um restaurante italiano, para mostrar o local e os pratos.

## Tecnologias

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- Tailwind CSS 3.4.14
- Axios 1.12.2
- Zustand 5.0.8

## Instalação

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/       # Componentes genéricos
│   └── lib/              # Bibliotecas e configurações
├── domain/               # Domínios de negócio
├── pages/                # Páginas da aplicação
│   ├── layouts/         # Layouts compartilhados
│   ├── Home/            # Página inicial
│   ├── Menu/            # Página do cardápio
│   ├── Gallery/         # Página da galeria
│   ├── Contact/         # Página de contato
│   └── NotFound/        # Página 404
└── main.tsx             # Ponto de entrada
```

## Funcionalidades

- **Página Inicial**: Apresentação do restaurante com visão geral
- **Cardápio**: Exibição detalhada dos pratos organizados por categorias
- **Galeria**: Fotos do ambiente e pratos do restaurante
- **Contato**: Informações de localização, horários e formulário de contato

## Rotas

- `/` - Página inicial
- `/cardapio` - Cardápio
- `/galeria` - Galeria de fotos
- `/contato` - Informações de contato

## API

O frontend está configurado para se comunicar com uma API REST:

- **Base URL**: Configurável via `VITE_API_URL`
- **Versão**: v1
- **Endpoints públicos**: `/api/v1/external/*`
- **Endpoints autenticados**: `/api/v1/internal/*`