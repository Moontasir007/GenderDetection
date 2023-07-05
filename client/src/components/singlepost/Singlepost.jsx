import React from "react";
import Post from "../post/Post";
import LikeDislike from "../likeDislike/LikeDislike";
import Comment from "../comment/Comment";
import "./SinglePost.css";

const SinglePost = ({ post }) => {
    return (
        <div className="single-post">
            <Post post={post} />
            <LikeDislike postId={post.id} />
            <Comment postId={post.id} />
            {/* Additional content or functionality specific to a single post */}
        </div>
    );
};

export default SinglePost;
