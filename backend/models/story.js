const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title: { type: String, required: true },
    cover: { type: String, required: true }, // URL or path to the image
    content: { type: String, required: true },
    tags: [{ type: String }], // Array of tags
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Story', storySchema);