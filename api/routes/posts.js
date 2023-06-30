const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//Create post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    console.log(newPost)
    const savedPost = await newPost.save();
    try {
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(savedPost);
    }
});

//Update post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, { new: true });
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        }
        else {
            res.status(401).json("you can update only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

//Delete post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete()
                res.status(200).json("Post has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        }
        else {
            res.status(401).json("you can delete only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }

});


//Get post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        console.log(post)
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});


//Get all post

router.get("/", async (req, res) => {
    const username = req.query.user;
    const catname = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username })
        } else if (catname) {
            posts = await Post.find({
                categories: {
                    $in: [catname]
                }
            })
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router