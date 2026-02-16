import mongoose from 'mongoose';

const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  bloodGroup: {
    type: String,
    required: true,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  receiveAlerts: {
    type: Boolean,
    default: true // Opt-in for email notifications
  },
  isAvailable: {
    type: Boolean,
    default: true // Whether donor is currently available
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Donor = mongoose.model('Donor', donorSchema);

export default Donor;