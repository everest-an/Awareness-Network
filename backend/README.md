# Awareness Network Backend

The secure backend API for Awareness Network, built with NestJS and TypeScript.

## Features

- **Zero-Knowledge Architecture**: All user data is stored encrypted
- **JWT Authentication**: Secure user authentication and authorization
- **RESTful API**: Clean and well-documented API endpoints
- **PostgreSQL Database**: Reliable data storage with TypeORM
- **AI Job Queue**: Asynchronous processing for OCR and video generation

## Technology Stack

- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe development
- **TypeORM** - Database ORM
- **PostgreSQL** - Relational database
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- PostgreSQL 14+

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Edit .env with your configuration
nano .env
```

### Database Setup

```bash
# Create database
createdb awareness_network

# Run migrations (auto-sync in development)
pnpm run start:dev
```

### Running the Application

```bash
# Development mode
pnpm run start:dev

# Production build
pnpm run build
pnpm run start:prod
```

The API will be available at `http://localhost:3000/api`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Memories

- `POST /api/memories` - Upload encrypted memory
- `GET /api/memories` - List user memories
- `GET /api/memories/:id` - Get specific memory
- `DELETE /api/memories/:id` - Delete memory

### Contacts

- `POST /api/contacts` - Create contact
- `GET /api/contacts` - List contacts
- `GET /api/contacts/:id` - Get specific contact

### Jobs

- `POST /api/jobs/ocr` - Submit OCR job
- `POST /api/jobs/video-montage` - Submit video generation job
- `GET /api/jobs/:id` - Get job status

## Security

All sensitive user data is encrypted on the client before being sent to the server. The backend stores only encrypted blobs and never has access to the decryption keys.

## License

Copyright © 2025 Awareness Network. All rights reserved.
