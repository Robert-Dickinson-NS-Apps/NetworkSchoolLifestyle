# Network School Forest City Website

## Overview

This is a full-stack web application showcasing Network School lifestyle and amenities for people aged 70+. The website features a clean, box-based layout highlighting specific advantages of living at the Network School in Forest City, Malaysia. It includes contact forms for inquiries and uses a modern tech stack with TypeScript, Tailwind CSS, shadcn/ui components, and Drizzle ORM for database management.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Simple box layout with background images for each feature/advantage.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration for development

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Validation**: Zod schemas shared between frontend and backend
- **Session Management**: Prepared for PostgreSQL session storage
- **Development**: Hot reload with tsx for server-side development

### Data Storage
- **Database**: PostgreSQL (via Neon serverless)
- **ORM**: Drizzle ORM with migrations support
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Fallback Storage**: In-memory storage implementation for development

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure
- **Contact Inquiries**: Campus visit request form submissions
- **Newsletter Subscriptions**: Email subscription management

### API Endpoints
- `POST /api/contact` - Submit campus visit inquiry
- `POST /api/newsletter` - Newsletter email subscription

### Frontend Pages
- **Home Page**: Main landing page with contact forms and campus information
- **404 Page**: Not found error handling

### UI Components
- Complete shadcn/ui component library implementation
- Custom contact form with visit type selection
- Newsletter subscription form
- Toast notifications for user feedback

## Data Flow

1. **Form Submission**: Users fill out contact or newsletter forms
2. **Client Validation**: Zod schemas validate data on frontend
3. **API Request**: TanStack Query handles HTTP requests
4. **Server Validation**: Express routes re-validate with shared Zod schemas
5. **Database Storage**: Drizzle ORM persists data to PostgreSQL
6. **Response Handling**: Success/error feedback via toast notifications

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **Build Tools**: Vite, TypeScript, ESBuild
- **Backend**: Express.js, Node.js types

### UI and Styling
- **Component Library**: Radix UI primitives, shadcn/ui
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority

### Database and Validation
- **Database**: Neon Database (PostgreSQL), Drizzle ORM
- **Validation**: Zod, drizzle-zod
- **Session**: connect-pg-simple for PostgreSQL sessions

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment
- **Development**: tsx for TypeScript execution, trace mapping

## Deployment Strategy

### Development Mode
- Concurrent frontend (Vite dev server) and backend (tsx with hot reload)
- Replit-specific development banner and error overlay
- File watching and auto-restart capabilities

### Production Build
1. **Frontend Build**: Vite compiles React app to static assets
2. **Backend Build**: ESBuild bundles Express server for Node.js
3. **Asset Serving**: Express serves built frontend from `/dist/public`
4. **Environment**: Production mode with optimized builds

### Environment Configuration
- Database URL required for PostgreSQL connection
- Development/production mode switching
- Replit environment detection and integration

### Database Management
- Drizzle migrations stored in `/migrations` directory
- Schema changes managed through `db:push` script
- PostgreSQL connection via environment variables