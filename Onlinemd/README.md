<<<<<<< HEAD
# MediShare - Online Medicine Donation Platform

A modern React + Vite frontend application that connects with an ASP.NET Core backend for managing medicine donations, hospitals, NGOs, and users.

## 🚀 Features

### Core Modules
- **User Management**: Complete CRUD operations for users with role-based access
- **Donation Management**: Track medicine donations from donors
- **Request Management**: Handle medicine requests from hospitals and NGOs
- **NGO Management**: Manage NGO profiles and verification
- **Hospital Management**: Hospital registration and management
- **Medicine Management**: Medicine inventory and tracking
- **Admin Dashboard**: Comprehensive analytics and management interface

### Key Features
- 🔐 **Authentication & Authorization**: JWT-based authentication with role-based access
- 📱 **Responsive Design**: Modern UI with Tailwind CSS and glass morphism effects
- 🔍 **Search & Filter**: Advanced search functionality across all modules
- 📊 **Analytics Dashboard**: Real-time statistics and data visualization
- 🎨 **Modern UI/UX**: Beautiful interface with smooth animations
- 🔄 **Real-time Updates**: Live data synchronization with backend

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

### Backend Integration
- **ASP.NET Core** - RESTful API backend
- **Entity Framework Core** - Database operations
- **JWT Authentication** - Secure authentication
- **RESTful APIs** - Standard HTTP endpoints

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   └── DashboardLayout.jsx # Main dashboard layout
├── pages/
│   ├── UserList.jsx        # User management
│   ├── UserCreate.jsx      # User creation
│   ├── DonationList.jsx    # Donation management
│   ├── RequestList.jsx     # Request management
│   ├── NGOList.jsx         # NGO management
│   └── ...                 # Other existing pages
├── services/
│   ├── userService.js      # User API calls
│   ├── donationService.js  # Donation API calls
│   ├── requestService.js   # Request API calls
│   ├── ngoService.js       # NGO API calls
│   ├── medicineService.js  # Medicine API calls
│   ├── hospitalService.js  # Hospital API calls
│   └── adminService.js     # Admin API calls
├── contexts/
│   └── AuthContext.jsx     # Authentication context
└── lib/
    └── utils.js           # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- ASP.NET Core backend running on `https://localhost:44344`

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd onlinemd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   echo "VITE_API_BASE_URL=https://localhost:44344/api" > .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://localhost:44344/api
```

### API Endpoints

The frontend connects to the following ASP.NET Core API endpoints:

#### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user
- `GET /api/users/{id}` - Get user by ID

#### Donations
- `GET /api/donations` - Get all donations
- `POST /api/donations` - Create donation
- `PUT /api/donations/{id}` - Update donation
- `DELETE /api/donations/{id}` - Delete donation
- `GET /api/donations/{id}` - Get donation by ID

#### Requests
- `GET /api/requests` - Get all requests
- `POST /api/requests` - Create request
- `PUT /api/requests/{id}` - Update request
- `DELETE /api/requests/{id}` - Delete request
- `GET /api/requests/{id}` - Get request by ID

#### NGOs
- `GET /api/ngoes` - Get all NGOs
- `POST /api/ngoes` - Create NGO
- `PUT /api/ngoes/{id}` - Update NGO
- `DELETE /api/ngoes/{id}` - Delete NGO
- `GET /api/ngoes/{id}` - Get NGO by ID

## 🎨 UI Components

### Dashboard Layout
The application uses a modern sidebar layout with:
- **Responsive Design**: Works on desktop and mobile
- **Role-based Navigation**: Different menu items based on user role
- **Active Route Highlighting**: Current page is highlighted
- **User Profile**: Shows user info and logout option

### Common Components
- **Cards**: Glass morphism effect with backdrop blur
- **Buttons**: Consistent styling with hover effects
- **Badges**: Status indicators with color coding
- **Forms**: Validated forms with error handling
- **Modals**: Confirmation dialogs and forms

## 🔐 Authentication

### User Roles
- **Admin**: Full access to all modules
- **Donor**: Can manage donations
- **Hospital**: Can make requests and manage profile
- **NGO**: Can make requests and manage profile

### Protected Routes
All routes except login are protected and require authentication. Role-based access control ensures users only see relevant features.

## 📊 Features by Module

### User Management
- ✅ List all users with search and filter
- ✅ Create new users with validation
- ✅ Edit user profiles
- ✅ Delete users with confirmation
- ✅ Role-based user management

### Donation Management
- ✅ View all donations with status tracking
- ✅ Create new donations
- ✅ Update donation details
- ✅ Delete donations
- ✅ Search and filter donations

### Request Management
- ✅ View all requests with status tracking
- ✅ Create new requests
- ✅ Update request details
- ✅ Delete requests
- ✅ Search and filter requests

### NGO Management
- ✅ View all NGOs with verification status
- ✅ Create new NGOs
- ✅ Update NGO profiles
- ✅ Delete NGOs
- ✅ Search and filter NGOs

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The built files in `dist/` can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- Hostinger

### Environment Configuration
Make sure to update the `VITE_API_BASE_URL` in production to point to your live backend API.

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use TypeScript-like prop validation
- Maintain consistent naming conventions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

=======
# MediShare - Online Medicine Donation Platform

A modern React + Vite frontend application that connects with an ASP.NET Core backend for managing medicine donations, hospitals, NGOs, and users.

## 🚀 Features

### Core Modules
- **User Management**: Complete CRUD operations for users with role-based access
- **Donation Management**: Track medicine donations from donors
- **Request Management**: Handle medicine requests from hospitals and NGOs
- **NGO Management**: Manage NGO profiles and verification
- **Hospital Management**: Hospital registration and management
- **Medicine Management**: Medicine inventory and tracking
- **Admin Dashboard**: Comprehensive analytics and management interface

### Key Features
- 🔐 **Authentication & Authorization**: JWT-based authentication with role-based access
- 📱 **Responsive Design**: Modern UI with Tailwind CSS and glass morphism effects
- 🔍 **Search & Filter**: Advanced search functionality across all modules
- 📊 **Analytics Dashboard**: Real-time statistics and data visualization
- 🎨 **Modern UI/UX**: Beautiful interface with smooth animations
- 🔄 **Real-time Updates**: Live data synchronization with backend

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

### Backend Integration
- **ASP.NET Core** - RESTful API backend
- **Entity Framework Core** - Database operations
- **JWT Authentication** - Secure authentication
- **RESTful APIs** - Standard HTTP endpoints

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   └── DashboardLayout.jsx # Main dashboard layout
├── pages/
│   ├── UserList.jsx        # User management
│   ├── UserCreate.jsx      # User creation
│   ├── DonationList.jsx    # Donation management
│   ├── RequestList.jsx     # Request management
│   ├── NGOList.jsx         # NGO management
│   └── ...                 # Other existing pages
├── services/
│   ├── userService.js      # User API calls
│   ├── donationService.js  # Donation API calls
│   ├── requestService.js   # Request API calls
│   ├── ngoService.js       # NGO API calls
│   ├── medicineService.js  # Medicine API calls
│   ├── hospitalService.js  # Hospital API calls
│   └── adminService.js     # Admin API calls
├── contexts/
│   └── AuthContext.jsx     # Authentication context
└── lib/
    └── utils.js           # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- ASP.NET Core backend running on `https://localhost:44344`

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd onlinemd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   echo "VITE_API_BASE_URL=https://localhost:44344/api" > .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://localhost:44344/api
```

### API Endpoints

The frontend connects to the following ASP.NET Core API endpoints:

#### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user
- `GET /api/users/{id}` - Get user by ID

#### Donations
- `GET /api/donations` - Get all donations
- `POST /api/donations` - Create donation
- `PUT /api/donations/{id}` - Update donation
- `DELETE /api/donations/{id}` - Delete donation
- `GET /api/donations/{id}` - Get donation by ID

#### Requests
- `GET /api/requests` - Get all requests
- `POST /api/requests` - Create request
- `PUT /api/requests/{id}` - Update request
- `DELETE /api/requests/{id}` - Delete request
- `GET /api/requests/{id}` - Get request by ID

#### NGOs
- `GET /api/ngoes` - Get all NGOs
- `POST /api/ngoes` - Create NGO
- `PUT /api/ngoes/{id}` - Update NGO
- `DELETE /api/ngoes/{id}` - Delete NGO
- `GET /api/ngoes/{id}` - Get NGO by ID

## 🎨 UI Components

### Dashboard Layout
The application uses a modern sidebar layout with:
- **Responsive Design**: Works on desktop and mobile
- **Role-based Navigation**: Different menu items based on user role
- **Active Route Highlighting**: Current page is highlighted
- **User Profile**: Shows user info and logout option

### Common Components
- **Cards**: Glass morphism effect with backdrop blur
- **Buttons**: Consistent styling with hover effects
- **Badges**: Status indicators with color coding
- **Forms**: Validated forms with error handling
- **Modals**: Confirmation dialogs and forms

## 🔐 Authentication

### User Roles
- **Admin**: Full access to all modules
- **Donor**: Can manage donations
- **Hospital**: Can make requests and manage profile
- **NGO**: Can make requests and manage profile

### Protected Routes
All routes except login are protected and require authentication. Role-based access control ensures users only see relevant features.

## 📊 Features by Module

### User Management
- ✅ List all users with search and filter
- ✅ Create new users with validation
- ✅ Edit user profiles
- ✅ Delete users with confirmation
- ✅ Role-based user management

### Donation Management
- ✅ View all donations with status tracking
- ✅ Create new donations
- ✅ Update donation details
- ✅ Delete donations
- ✅ Search and filter donations

### Request Management
- ✅ View all requests with status tracking
- ✅ Create new requests
- ✅ Update request details
- ✅ Delete requests
- ✅ Search and filter requests

### NGO Management
- ✅ View all NGOs with verification status
- ✅ Create new NGOs
- ✅ Update NGO profiles
- ✅ Delete NGOs
- ✅ Search and filter NGOs

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The built files in `dist/` can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- Hostinger

### Environment Configuration
Make sure to update the `VITE_API_BASE_URL` in production to point to your live backend API.

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use TypeScript-like prop validation
- Maintain consistent naming conventions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

>>>>>>> e494192 (Final Push)
**Built with ❤️ using React + Vite + ASP.NET Core** 