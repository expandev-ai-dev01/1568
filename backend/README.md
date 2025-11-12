# Italiano Restaurant - Backend API

Backend API for the Italiano Restaurant website, providing endpoints for menu management, gallery, location information, and contact functionality.

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Architecture**: REST API

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Configure environment variables in `.env`

### Development

Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Build

Build for production:
```bash
npm run build
```

### Production

Start production server:
```bash
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### API Versioning

All API endpoints are versioned:
- Base URL: `/api/v1`
- External (public) routes: `/api/v1/external`
- Internal (authenticated) routes: `/api/v1/internal`

## Features

This backend will support the following features:

1. **Home Page Content** - Serve homepage data and images
2. **Menu Management** - CRUD operations for restaurant menu items
3. **Photo Gallery** - Manage restaurant photos and ambiance images
4. **Location & Contact** - Provide location data and handle contact form submissions

## Development Guidelines

- Follow TypeScript strict mode
- Use ESLint for code quality
- Implement comprehensive error handling
- Document all API endpoints
- Write unit tests for business logic
- Follow RESTful API design principles

## Environment Variables

See `.env.example` for required environment variables.

## License

ISC