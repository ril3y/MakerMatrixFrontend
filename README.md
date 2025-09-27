# MakerMatrix Frontend

React frontend for the MakerMatrix inventory management system.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Setup:**
   Create a `.env` file in the root directory (optional):
   ```
   VITE_API_URL=http://localhost:57891
   ```

3. **Development:**
   ```bash
   npm run dev
   ```
   This starts the development server at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```
   This creates the `dist/` folder for production deployment.

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Features

- **Parts Management**: Add, edit, delete, and search parts inventory
- **Location Management**: Organize parts by storage locations
- **Category Management**: Categorize parts for better organization
- **Settings**: Configure AI services, printers, database backups
- **User Management**: Admin functionality for user and role management
- **CSV Import**: Bulk import parts from DigiKey, LCSC, and other suppliers
- **Task Management**: Background task monitoring and execution
- **Theme System**: Light/dark mode with multiple color schemes
- **Printer Integration**: Brother QL label printer support with templates

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Icons**: Lucide React

## Development Notes

- The frontend communicates with the FastAPI backend on port 57891
- Authentication uses JWT tokens stored in localStorage
- WebSocket connection for real-time updates
- Responsive design optimized for desktop and mobile