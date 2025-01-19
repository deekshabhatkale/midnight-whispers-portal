const express = require('express');
const router = express.Router();
const Story = require('../models/story');

// Get all stories, sorted by most recent.
router.get('/', async (req, res) => {
    try {
        const stories = await Story.find().sort({ createdAt: -1 }).populate('author','name profilePicture _id');
        res.json(stories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific story by ID
router.get('/:id', async (req, res) => {
    try {
        const story = await Story.findById(req.params.id).populate('author','name profilePicture _id');
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.json(story);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new story
router.post('/api/stories', async (req, res) => {
    const story = new Story({
        title: req.body.title,
        cover: req.body.cover,
        content: req.body.content,
        tags: req.body.tags,
    });

    try {
        const newStory = await story.save();
        res.status(201).json(newStory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a story (you might want more robust validation/authorization for this)
router.patch('/:id', async (req, res) => {
    try {
        const story = await Story.findById(req.params.id);
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }
       
         Object.assign(story, req.body);
         story.updatedAt = Date.now();

        const updatedStory = await story.save();
        res.json(updatedStory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// Delete a story (add security measures here)
router.delete('/:id', async (req, res) => {
  try {
    const story = await Story.findByIdAndDelete(req.params.id)
    if(!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    res.status(200).json({ message: 'Story deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;