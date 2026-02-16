import express from 'express';
import Donor from '../models/Donor.js';

const router = express.Router();

// POST /api/donors - Register a new donor

router.post('/', async (req, res) => {
  try {
    const { name, bloodGroup, city, phone } = req.body;

    if (!name || !bloodGroup || !city || !phone) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const donor = new Donor({ name, bloodGroup, city, phone });
    await donor.save();

    res.status(201).json({ 
      message: 'Donor registered successfully!',
      donor 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;