# DevOps Engineer Portfolio Application

## Overview

This is a full-stack portfolio website for a DevOps Engineer built with React and Express. The application showcases professional experience, technical skills, certifications, and projects in a modern, responsive design. It features a personal portfolio for Alex Philip, a Cloud Infra & DevOps Specialist from Kerala, India, demonstrating expertise in Kubernetes, AWS EKS, Terraform, and CI/CD automation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library for consistent, accessible design
- **Component Structure**: Single-page application with modular components (Hero, Skills, Experience, Projects, Contact, etc.)
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Theme System**: Dark/light mode support with CSS custom properties and localStorage persistence
- **Icons**: Lucide React for consistent iconography

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: Hot reload with Vite integration in development mode
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) for user data
- **API Structure**: RESTful endpoints with /api prefix, though currently minimal implementation
- **Error Handling**: Centralized error middleware with proper HTTP status codes

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Connection**: Neon Database serverless driver for cloud-native database access
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Schema Definition**: Shared schema in TypeScript with Zod validation
- **Development Storage**: In-memory storage implementation for development/testing

### Styling and Design System
- **CSS Framework**: Tailwind CSS with custom design tokens
- **Component Library**: shadcn/ui with Radix UI primitives for accessibility
- **Typography**: Inter font family for modern, readable text
- **Color System**: CSS custom properties for theme consistency
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Animation**: CSS transitions and transforms for smooth interactions

### Development and Build Process
- **Package Manager**: npm with lockfile for dependency management
- **TypeScript**: Strict type checking with path mapping for clean imports
- **Build Process**: Vite for client bundling, esbuild for server bundling
- **Development Server**: Integrated Vite dev server with Express backend
- **Code Quality**: TypeScript compiler checks and modern ES module syntax

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for modern React development
- **Backend Framework**: Express.js with TypeScript support (tsx for development)
- **Build Tools**: Vite with React plugin and development error overlay

### Database and ORM
- **Database Driver**: @neondatabase/serverless for PostgreSQL connectivity
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Validation**: Drizzle-Zod integration for runtime validation
- **Session Storage**: connect-pg-simple for PostgreSQL session management

### UI and Design
- **Component Library**: Complete shadcn/ui component set with Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent SVG icons
- **Utilities**: class-variance-authority for component variants, clsx for conditional classes

### Development Tools
- **Replit Integration**: Specialized Vite plugins for Replit development environment
- **Error Handling**: Runtime error modal for development debugging
- **Code Analysis**: Cartographer plugin for code mapping (development only)

### Form and Validation
- **Form Management**: React Hook Form with Hookform resolvers
- **Date Handling**: date-fns for date manipulation and formatting
- **Validation**: Zod schema validation library

### Additional Features
- **Carousel**: Embla Carousel React for project showcases
- **Command Interface**: cmdk for command palette functionality
- **Utility Libraries**: nanoid for unique ID generation

The architecture prioritizes developer experience with TypeScript throughout, modern tooling with Vite, and a scalable component-based design. The database layer is prepared for production with Drizzle ORM while maintaining flexibility with the storage interface abstraction.