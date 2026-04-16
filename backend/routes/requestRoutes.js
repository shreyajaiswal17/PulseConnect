import express from 'express';
import Request from '../models/Request.js';
import Donor from '../models/Donor.js';
import { sendBloodRequestEmail, sendRequestConfirmationEmail } from '../utils/emailService.js';

const router = express.Router();

// POST /api/requests - Create blood request

router.post('/', async (req, res) => {
  try {
    const { patientName, requesterEmail, bloodGroup, city, phone, note } = req.body;

    if (!patientName || !requesterEmail || !bloodGroup || !city || !phone) {
      return res.status(400).json({ message: 'All required fields must be filled' });
    }

    const request = new Request({ patientName, requesterEmail, bloodGroup, city, phone, note });
    await request.save();

    // Find matching donors who opted-in for alerts (by blood group only)
    const matchingDonors = await Donor.find({
      bloodGroup: request.bloodGroup,
      receiveAlerts: true,
      isAvailable: true
    });

    // Send email notifications to matching donors
    let emailsSent = 0;
    for (const donor of matchingDonors) {
      if (donor.email) {
        const sent = await sendBloodRequestEmail(donor.email, donor.name, {
          patientName,
          bloodGroup,
          city,
          phone,
          note
        });
        if (sent) emailsSent++;
      }
    }

    // Send confirmation email to requester
    await sendRequestConfirmationEmail(requesterEmail, {
      patientName,
      bloodGroup,
      city
    }, matchingDonors.length);

    console.log(`✅ Request created. Notified ${emailsSent}/${matchingDonors.length} donors`);

    res.status(201).json({ 
      message: 'Blood request created successfully!',
      request,
      notifiedDonors: emailsSent
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

    // Find donors with same blood group (country-wide)
    const matchingDonors = await Donor.find({
      bloodGroup: request.bloodGroup
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