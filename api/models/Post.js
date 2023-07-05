const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        desc: {
            type: String,
            max: 500,
        },
        imageUrl: {
            type: String,
        },
        likes: {
            type: Array,
            default: [],
        },
        dislikes: {
            type: Array,
            default: [],
        },
        comments: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
