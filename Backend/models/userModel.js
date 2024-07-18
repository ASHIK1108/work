// backend/models/userModel.js
const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create model based on schema
const User = mongoose.model('User', userSchema);

module.exports = User;