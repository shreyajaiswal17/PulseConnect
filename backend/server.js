import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import donorRoutes from './routes/donorRoutes.js';
import requestRoutes from './routes/requestRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// db Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((err) => {
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1);
  });


// Routes
app.use('/api/donors', donorRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/contact', contactRoutes);

// Test Route
app.get('/', (req, res) => {
  res.json({ message: '(PulseConnect) API is running 🚀' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// Starts your server
// Binds Express to a port (5000)
// Without this, your app does nothing