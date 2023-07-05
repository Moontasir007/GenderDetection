const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

// Like a post
router.post("/like/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        post.likes.push(req.body.userId);
        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Dislike a post
router.post("/dislike/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const index = post.likes.indexOf(req.body.userId);
        if (index > -1) {
            post.likes.splice(index, 1);
        }
        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
