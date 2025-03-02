const mongoose = require('mongoose');

// Website Audit Request Schema
const auditRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  websiteUrl: String,
  concerns: [String],
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Technology Consultation Schema
const techConsultationSchema = new mongoose.Schema({
  name: String,
  email: String,
  projectType: String,
  techStack: [String],
  requirements: String,
  status: {
    type: String,
    enum: ['pending', 'scheduled', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  comment: String,
  serviceType: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Domain Registration Request Schema
const domainRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  domainName: String,
  alternativeDomains: [String],
  status: {
    type: String,
    enum: ['pending', 'checking', 'available', 'unavailable', 'registered'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create models
const AuditRequest = mongoose.model('AuditRequest', auditRequestSchema);
const TechConsultation = mongoose.model('TechConsultation', techConsultationSchema);
const Feedback = mongoose.model('Feedback', feedbackSchema);
const DomainRequest = mongoose.model('DomainRequest', domainRequestSchema);

module.exports = {
  AuditRequest,
  TechConsultation,
  Feedback,
  DomainRequest
};