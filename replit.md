# Terrifier 2 Movie Landing Page

## Overview

This is a full-stack web application showcasing a horror movie landing page for "Terrifier 2" by Superfine Films. The application features a modern React frontend with a horror-themed design and an Express.js backend with PostgreSQL database integration. The project is built with TypeScript and uses modern web development practices.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom horror theme variables
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API structure with `/api` prefix

### Development Environment
- **Runtime**: Node.js 20
- **Package Manager**: npm
- **Development Server**: Vite dev server with HMR
- **Database Migrations**: Drizzle Kit for schema management

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation bar with mobile responsive menu
- **Hero Section**: Full-screen hero with movie poster and CTAs
- **Movie Details**: Film information with director, cast, and genre details
- **Poster Gallery**: Image gallery showcasing movie stills
- **Cast Section**: Grid layout displaying cast members with photos
- **CTA Section**: Call-to-action buttons for tickets and more info
- **Footer**: Site footer with social links and company information

### Backend Infrastructure
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **User Management**: Basic user schema with authentication capabilities
- **Route Registration**: Modular route handling system
- **Error Handling**: Centralized error handling middleware
- **Development Tools**: Request logging and response timing

### Database Schema
- **Users Table**: Basic user entity with username and password fields
- **Schema Validation**: Zod integration for type-safe database operations
- **Migration System**: Drizzle migrations in dedicated `/migrations` directory

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle requests and interact with storage layer
3. **Storage Layer**: Abstracted interface allows switching between in-memory and PostgreSQL
4. **Database Operations**: Drizzle ORM handles type-safe database interactions
5. **Response Handling**: Structured error handling and logging throughout the stack

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Google Fonts**: Cinzel, Inter, and Creepster fonts for horror theming

### Backend Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: TypeScript ORM with PostgreSQL dialect
- **Express Session**: Session management with PostgreSQL store

### Development Tools
- **Vite**: Build tool with React plugin and runtime error overlay
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast bundling for production builds

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `npm run db:push`

### Environment Configuration
- **Development**: Local development with Vite dev server and hot reload
- **Production**: Express serves static files and API routes
- **Database**: Environment variable `DATABASE_URL` for connection string

### Replit Integration
- **Auto-scaling**: Configured for Replit's autoscale deployment
- **Port Configuration**: Server runs on port 5000, exposed on port 80
- **Workflow**: Automated build and start processes

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```