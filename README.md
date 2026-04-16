# PulseConnect - Blood Donation Platform

A voluntary blood donation platform built with React (Vite), Node.js/Express, MongoDB, and Auth0 authentication.

## 📋 Prerequisites

- Node.js (v14+)
- MongoDB Atlas account
- Auth0 account
- Git

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd PulseConnect
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
AUTH0_DOMAIN=your_auth0_domain
AUTH0_CLIENT_ID=your_auth0_client_id
AUTH0_CLIENT_SECRET=your_auth0_client_secret
```

Start the backend:
```bash
npm start
```

Backend will run on: **http://localhost:5000**

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env.local` file in the `frontend` directory:
```env
VITE_API_URL=http://localhost:5000
```

> **Note:** The `.env.local` file is automatically ignored by Git. Each developer should create their own local copy.

Start the frontend development server:
```bash
npm run dev
```

Frontend will run on: **http://localhost:5174**

## 🔐 Authentication

The application uses Auth0 for authentication. Configure your Auth0 credentials in the backend `.env` file.

## 📦 Project Structure

```
PulseConnect/
├── backend/
│   ├── models/        # MongoDB schemas
│   ├── routes/        # API endpoints
│   ├── utils/         # Utilities (email service)
│   ├── server.js      # Main backend file
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── App.jsx       # Main app router
│   │   └── main.jsx      # Entry point
│   ├── .env.local        # Local environment variables (not committed)
│   ├── .env.example      # Template for .env.local
│   └── package.json
└── README.md
```

## 🎯 Features

- ✅ View available blood donors by blood group
- ✅ Request blood with patient details
- ✅ Track blood request status
- ✅ Match donors automatically
- ✅ Email notifications to matching donors
- ✅ Auth0 protected routes

## 📝 License

MIT