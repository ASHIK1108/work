// backend/models/taskModel.js
const mongoose = require('mongoose');

// Define task schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Create model based on schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;