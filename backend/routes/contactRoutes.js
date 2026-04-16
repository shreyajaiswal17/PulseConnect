import express from 'express';
import Contact from '../models/contact.js';
import { sendContactConfirmationEmail } from '../utils/emailService.js';

const router = express.Router();

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    // Send confirmation email to user
    await sendContactConfirmationEmail(email, name, { subject, message });

    res.status(201).json({ 
      message: 'Message sent successfully! We will get back to you soon.',
      contact 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;