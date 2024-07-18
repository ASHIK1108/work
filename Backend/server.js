const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable for port
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/goal-tracker'; // Use environment variable for MongoDB URI

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);    // Authentication routes
app.use('/api/tasks', authMiddleware, taskRoutes);  // Task routes protected by authMiddleware

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});