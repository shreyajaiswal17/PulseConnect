import express from 'express';
import Donor from '../models/Donor.js';

const router = express.Router();

// POST /api/donors - Register a new donor

router.post('/', async (req, res) => {
  try {
    const { name, email, bloodGroup, city, phone, receiveAlerts } = req.body;

    if (!name || !email || !bloodGroup || !city || !phone) {
      return res.status(400).json({ message: 'All required fields must be filled' });
    }

    const donor = new Donor({ 
      name, 
      email, 
      bloodGroup, 
      city, 
      phone, 
      receiveAlerts: receiveAlerts !== undefined ? receiveAlerts : true 
    });
    await donor.save();

    res.status(201).json({ 
      message: 'Donor registered successfully! 🎉',
      donor 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET /api/donors - Get all available donors (public, non-sensitive info only)
router.get('/', async (req, res) => {
  try {
    const donors = await Donor.find({ isAvailable: true }).select('bloodGroup city isAvailable');
    res.status(200).json({ 
      message: 'Donors retrieved successfully',
      donors 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;