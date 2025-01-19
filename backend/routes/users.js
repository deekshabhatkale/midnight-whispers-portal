const express = require('express');
const router = express.Router();
const User = require('../models/user');


// Get a specific user by ID
router.get('/:id', async (req, res) => {
try {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
} catch (err) {
    res.status(500).json({ message: err.message });
}
});

// Update user information
router.patch('/:id', async (req, res) => {
  try{
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      Object.assign(user, req.body);
      user.updatedAt = Date.now();
      
      const updatedUser = await user.save();
      res.json(updatedUser);

  } catch(err){
       res.status(400).json({ message: err.message });
  }
});

module.exports = router;
