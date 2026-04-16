# PulseConnect - Blood Donation Platform

A voluntary blood donation platform built with React (Vite), Node.js/Express, MongoDB, and Auth0 authentication. PulseConnect connects blood donors with recipients seamlessly and securely.

## 📋 Prerequisites

- **Node.js** (v14+)
- **MongoDB Atlas** account with a cluster
- **Auth0** account with configured application
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd PulseConnect
```

### 2. Backend Setup

Navigate to backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pulseconnect
AUTH0_DOMAIN=your-domain.us.auth0.com
AUTH0_CLIENT_ID=your_auth0_client_id
AUTH0_CLIENT_SECRET=your_auth0_client_secret
```

Start the backend server:
```bash
npm start
```

✅ Backend running on: **http://localhost:5000**

### 3. Frontend Setup

In a new terminal, navigate to frontend directory and install dependencies:
```bash
cd frontend
npm install
```

Your `.env` file already includes:
```env
VITE_AUTH0_DOMAIN=dev-l01xztqwk6c0xtbq.us.auth0.com
VITE_AUTH0_CLIENT_ID=KoL0rhxjPt9SnY5TqE1Nln1eeXf6UuEJ
VITE_API_URL=http://localhost:5000
```

Start the frontend development server:
```bash
npm run dev
```

✅ Frontend running on: **http://localhost:5174**

## 🔐 Environment Variables

### Backend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Backend server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `AUTH0_DOMAIN` | Auth0 domain | `your-domain.us.auth0.com` |
| `AUTH0_CLIENT_ID` | Auth0 application ID | `your_client_id` |
| `AUTH0_CLIENT_SECRET` | Auth0 application secret | `your_client_secret` |

### Frontend (.env)
| Variable | Description | Value |
|----------|-------------|-------|
| `VITE_AUTH0_DOMAIN` | Auth0 domain for frontend | `dev-l01xztqwk6c0xtbq.us.auth0.com` |
| `VITE_AUTH0_CLIENT_ID` | Auth0 frontend app ID | `KoL0rhxjPt9SnY5TqE1Nln1eeXf6UuEJ` |
| `VITE_API_URL` | Backend API URL | `http://localhost:5000` |

## 📦 Project Structure

```
PulseConnect/
├── backend/
│   ├── models/
│   │   ├── contact.js      # Contact form schema
│   │   ├── Donor.js        # Donor registration schema
│   │   └── Request.js      # Blood request schema
│   ├── routes/
│   │   ├── contactRoutes.js
│   │   ├── donorRoutes.js
│   │   └── requestRoutes.js
│   ├── utils/
│   │   └── emailService.js # Email notifications
│   ├── server.js           # Main server file
│   ├── .env                # Environment variables (not committed)
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── DonorCard.jsx
│   │   │   ├── DonorFilters.jsx
│   │   │   ├── BloodRequestModal.jsx
│   │   │   ├── RequestStatusCard.jsx
│   │   │   ├── MatchedDonorCard.jsx
│   │   │   └── protectedRoute.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AvailableDonors.jsx
│   │   │   ├── MyBloodRequest.jsx
│   │   │   ├── RequestBlood.jsx
│   │   │   ├── RegisterDonor.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Auth.jsx
│   │   │   └── NotFound.jsx
│   │   ├── utils/           # Utility functions
│   │   ├── App.jsx          # Main router
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx         # Entry point
│   ├── public/              # Static assets
│   ├── .env                 # Environment variables (not committed)
│   ├── .gitignore
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── README.md
│
├── README.md                # This file
└── .gitignore
```

## 🎯 Features

- ✅ **View Available Donors** - Browse blood donors filtered by blood group and location
- ✅ **Request Blood** - Submit structured blood requests with patient details
- ✅ **Track Requests** - Monitor blood request status in real-time
- ✅ **Automatic Matching** - System automatically matches donors by blood group (nationwide)
- ✅ **Email Notifications** - Matching donors receive instant email notifications
- ✅ **Auth0 Protection** - Secure authentication for all sensitive pages
- ✅ **Responsive Design** - Mobile-friendly interface
- ✅ **MongoDB Integration** - Persistent data storage with MongoDB Atlas

## 🔗 API Endpoints

### Donors
- `GET /api/donors` - List all available donors
- `POST /api/donors` - Register a new donor

### Requests
- `POST /api/requests` - Submit a blood request
- `GET /api/requests/:id` - Get request details
- `GET /api/requests/:id/matches` - Get matching donors for a request

### Contact
- `POST /api/contact` - Submit contact form

## 🎨 Design System

**Colors:**
- **Gov Red**: `#8B0000` - Primary brand color
- **Gov Yellow**: `#F5C400` - Accent color
- **Gov Grey**: `#F0F2F5` - Background color

**Framework:** Tailwind CSS with custom government theme

## 🧪 Testing

For development testing, use these credentials:

**Auth0:** Configure your own Auth0 tenant for development

**MongoDB:** Use MongoDB Atlas free tier for development

## 📝 License

MIT - Open source blood donation platform

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📞 Support

For issues or questions, please open a GitHub issue or contact the development team.