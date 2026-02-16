import express from 'express';
import Request from '../models/Request.js';
import Donor from '../models/Donor.js';

const router = express.Router();

// POST /api/requests - Create blood request

router.post('/', async (req, res) => {
  try {
    const { patientName, bloodGroup, city, phone, note } = req.body;

    if (!patientName || !bloodGroup || !city || !phone) {
      return res.status(400).json({ message: 'All required fields must be filled' });
    }

    const request = new Request({ patientName, bloodGroup, city, phone, note });
    await request.save();

    res.status(201).json({ 
      message: 'Blood request created successfully!',
      request 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET /api/requests/:id/matches - Find matching donors
router.get('/:id/matches', async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    // Find donors with same blood group and city
    const matchingDonors = await Donor.find({
      bloodGroup: request.bloodGroup,
      city: request.city
    });

    res.status(200).json({ 
      request,
      matches: matchingDonors,
      count: matchingDonors.length
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;