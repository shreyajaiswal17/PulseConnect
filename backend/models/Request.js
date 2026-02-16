import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
    trim: true
  },
  requesterEmail: {
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
  note: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'fulfilled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Request = mongoose.model('Request', requestSchema);

export default Request;