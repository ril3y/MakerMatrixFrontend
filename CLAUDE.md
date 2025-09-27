# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
MakerMatrix Frontend is a React-based inventory management system for tracking electronic parts, tools, and components. It's built with modern web technologies and follows a modular architecture.

## Development Commands

### Core Commands
- `npm run dev` - Start development server (Vite) on port 3000
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint with TypeScript support
- `npm run preview` - Preview production build locally

### Notes
- No test framework is currently configured
- TypeScript compilation is part of the build process (`tsc && vite build`)

## Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Routing**: React Router DOM v6
- **State Management**: Zustand with persistence
- **Styling**: TailwindCSS with custom design system
- **HTTP Client**: Axios with custom interceptors
- **Forms**: React Hook Form + Zod validation
- **UI Components**: Custom components + Lucide React icons
- **Notifications**: React Hot Toast
- **Animations**: Framer Motion
- **Real-time**: Socket.io Client

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── layouts/        # Layout components (MainLayout, AuthLayout)
│   └── ui/             # Base UI components
├── pages/              # Route-level page components
│   ├── auth/           # Login/auth pages
│   ├── parts/          # Parts management pages
│   ├── locations/      # Location management pages
│   ├── categories/     # Category management pages
│   ├── users/          # User management (Admin only)
│   └── settings/       # Settings pages
├── services/           # API service layer
├── store/              # Zustand state stores
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
└── styles/             # Global styles and CSS
```

### Key Architectural Patterns

#### State Management (Zustand)
- Each domain has its own store (authStore, partsStore, dashboardStore, settingsStore)
- Auth store includes persistence and role-based access control
- Stores follow a consistent pattern: state + actions + error handling

#### API Layer
- Centralized HTTP client (`services/api.ts`) with axios
- Automatic token management and request/response interceptors
- Standardized error handling with toast notifications
- Base URL: `http://localhost:57891` (configurable via `VITE_API_URL`)

#### Authentication & Authorization
- JWT token-based authentication stored in localStorage
- Role-based access control with `hasRole()` and `hasPermission()` methods
- Protected routes with `ProtectedRoute` component
- Automatic token validation and refresh

#### Routing
- Nested route structure with layout components
- Protected routes requiring authentication
- Role-based route protection (e.g., `/users` requires Admin role)
- Unauthorized/404 error pages

#### Styling System
- Custom Tailwind design system with "Battle With Bytes" theme
- Dark theme with neon green (`#00ff9d`) primary color
- Custom animations, shadows, and utilities
- Consistent spacing, typography, and color tokens

## Development Guidelines

### Path Aliases
- `@/*` maps to `src/*` (configured in both Vite and TypeScript)
- Use absolute imports: `import { Component } from '@/components/Component'`

### API Integration
- All API calls go through the centralized `apiClient`
- Use service layer pattern: `auth.service.ts`, `parts.service.ts`, etc.
- API responses follow `ApiResponse<T>` interface
- Paginated responses use `PaginatedResponse<T>` interface

### Type Safety
- Strict TypeScript configuration with comprehensive linting
- Domain-specific type definitions in `types/` directory
- Form validation with Zod schemas
- Consistent interface naming: `CreateXRequest`, `UpdateXRequest`, etc.

### Component Patterns
- Functional components with hooks
- Custom hooks for business logic (`useAuth.ts`)
- Layout-based composition with `MainLayout` and `AuthLayout`
- Consistent error handling and loading states

## Server Configuration
- Development server proxy: `/api` → `http://localhost:57891`
- Backend API expected to run on port 57891
- Frontend dev server runs on port 3000