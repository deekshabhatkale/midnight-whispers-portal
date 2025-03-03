const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const storyRoutes = require('./routes/stories');
const MONGODB_URI = `mongodb+srv://deekshabhat712:DGm80P5tCqxdDkpv@midnight-whisper.mbqda.mongodb.net/?retryWrites=true&w=majority&appName=midnight-whisper`;
const app = express();
const port = 3000;

// Middleware
app.use(cors({
    origin: 'https://midnight-whispers.onrender.com',
    credentials: true,
}));
app.use(express.json());  // For parsing JSON requests

// Database Connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes

app.use('/stories', storyRoutes);


app.get('/', (req, res) => {
    res.send('Story Site Backend API');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});