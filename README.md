# MakerMatrix Frontend

A modern React-based frontend for the MakerMatrix inventory management system. This application provides a sleek interface for tracking electronic parts, tools, and components with a custom "Battle With Bytes" dark theme.

> **Backend Repository**: [MakerMatrix API](https://github.com/ril3y/MakerMatrix) - Python FastAPI backend with JWT authentication

## 🚀 Features

- **Inventory Management**: Track parts, quantities, locations, and categories
- **Real-time Updates**: Live inventory updates via Socket.io
- **Role-based Access**: Admin, manager, and user roles with permission-based features
- **Advanced Search**: Filter parts by category, location, supplier, and quantity
- **Dark Theme**: Custom neon green accent design optimized for makers
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **JWT Authentication**: Secure login with role-based access control

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript + Vite
- **Routing**: React Router DOM v6
- **State Management**: Zustand with localStorage persistence
- **Styling**: TailwindCSS with custom design system
- **HTTP Client**: Axios with JWT authentication
- **Forms**: React Hook Form + Zod validation
- **UI Components**: Custom components + Lucide React icons
- **Notifications**: React Hot Toast
- **Animations**: Framer Motion

### Backend (Separate Repository)
- **Framework**: Python FastAPI
- **Database**: SQLAlchemy (supports multiple backends)
- **Authentication**: JWT tokens
- **Documentation**: Swagger UI
- **Default Port**: 57891

## 📦 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Python 3.7+ (for backend)

### 1. Setup Backend
```bash
# Clone and setup the backend
git clone https://github.com/ril3y/MakerMatrix.git
cd MakerMatrix
pip install -r requirements.txt
python -m MakerMatrix.main
```

The backend will start on `http://localhost:57891` with Swagger docs at `/docs`.

**Default Admin Credentials:**
- Username: `admin`
- Password: `Admin123!`

### 2. Setup Frontend
```bash
# Clone and setup the frontend
git clone https://github.com/ril3y/MakerMatrixFrontend.git
cd MakerMatrixFrontend
npm install
npm run dev
```

The application will be available at `http://localhost:3000`.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production (TypeScript + Vite)
- `npm run lint` - Run ESLint with TypeScript support
- `npm run preview` - Preview production build locally

### Environment Configuration

Create a `.env` file to customize the API URL:
```env
VITE_API_URL=http://localhost:57891
```

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

## 🎨 Design System

The application uses a custom "Battle With Bytes" design system featuring:

- **Primary Color**: Neon Green (`#00ff9d`)
- **Theme**: Dark mode with custom shadows and animations
- **Typography**: System fonts with consistent sizing
- **Components**: Reusable UI components with consistent styling

## 🔐 Authentication & Authorization

- **JWT Token Authentication**: Secure login with automatic token refresh
- **Role-based Access Control**:
  - **Admin**: Full system access including user management
  - **Manager**: Read/write access to inventory
  - **User**: Read-only access to inventory
- **Protected Routes**: Automatic role verification and redirection
- **Persistent Sessions**: Login state maintained across browser sessions

## 📱 Features Overview

### Parts Management
- Add, edit, and delete electronic parts
- Track quantities and minimum stock levels
- Associate parts with locations and categories
- Add custom properties and supplier information
- Advanced search and filtering

### Location Management
- Hierarchical location system (rooms, shelves, bins)
- Track part counts per location
- Nested location relationships

### Category Management
- Organize parts by categories
- Multi-category assignment per part

### User Management (Admin Only)
- User role management
- Permission-based access control

## 🔗 API Integration

The frontend communicates with the MakerMatrix FastAPI backend through:

- **RESTful API**: Full CRUD operations for parts, locations, categories
- **JWT Authentication**: Secure API access with role verification
- **Error Handling**: Comprehensive error responses with user feedback
- **Real-time Updates**: Live inventory synchronization

### Key API Endpoints
- `GET /parts` - Retrieve all parts
- `POST /parts` - Create new part
- `PUT /parts/{id}` - Update existing part
- `DELETE /parts/{id}` - Delete part
- `POST /auth/login` - User authentication
- `GET /auth/me` - Get current user info

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] Mobile app version
- [ ] Barcode scanning integration
- [ ] Advanced reporting and analytics
- [ ] Import/export functionality
- [ ] Multi-warehouse support
- [ ] Real-time notifications
- [ ] Advanced search filters

## 🔗 Related Projects

- **Backend API**: [MakerMatrix](https://github.com/ril3y/MakerMatrix) - Python FastAPI backend

Project Link: [https://github.com/ril3y/MakerMatrixFrontend](https://github.com/ril3y/MakerMatrixFrontend)