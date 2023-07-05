import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
    const PF = "http://localhost:5000/images/";

    return (
        <div className="post">
            {post.imageUrl && <img className="postImg" src={PF + post.imageUrl} alt="" />}
            <div className="postInfo">
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.desc}</span>
                </Link>
                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
        </div>
    );
};

export default Post;
