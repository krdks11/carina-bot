const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    console.log('Please ensure MongoDB is running on your system.');
  });

// Quote Request Schema
const quoteRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  projectType: String,
  description: String,
  timeline: String,
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'approved', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// User Interaction Schema
const userInteractionSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  command: String,
  message: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Create models
const QuoteRequest = mongoose.model('QuoteRequest', quoteRequestSchema);
const UserInteraction = mongoose.model('UserInteraction', userInteractionSchema);

module.exports = {
  QuoteRequest,
  UserInteraction
};