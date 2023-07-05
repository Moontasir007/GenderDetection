const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

// Get comments for a post
router.get("/:postId", async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post.comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create new comment
router.post("/:postId", async (req, res) => {
    const { text, userId } = req.body;

    try {
        const post = await Post.findById(req.params.postId);
        post.comments.push({ text, userId });
        const updatedPost = await post.save();
        res.json(updatedPost.comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete comment by ID
router.delete("/:postId/:commentId", async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        post.comments = post.comments.filter(
            (comment) => comment._id.toString() !== req.params.commentId
        );
        const updatedPost = await post.save();
        res.json(updatedPost.comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
