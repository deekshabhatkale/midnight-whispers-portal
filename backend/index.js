const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const storyRoutes = require('./routes/stories');
const userRoutes = require('./routes/users');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());  // For parsing JSON requests

//Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));


// Routes
app.use('/auth', authRoutes);
app.use('/stories', storyRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Story Site Backend API');
  });

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});