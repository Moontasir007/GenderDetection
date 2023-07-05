import React from "react";
import SinglePost from '../singlepost/SinglePost'
import "./PostList.css";

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map((post) => (
                <SinglePost key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
