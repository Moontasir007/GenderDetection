import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import "./comment.css";

const Comment = ({ postId }) => {
    const [comment, setComment] = useState("");
    const { user } = useContext(Context);

    const handleComment = () => {
        if (!user) {
            // Handle user not logged in
            alert("Please log in to add a comment.");
            return;
        }

        axios
            .post(`/posts/${postId}/comments`, {
                userId: user._id,
                comment: comment,
            })
            .then((res) => {
                // Handle successful comment submission
                setComment("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="comment">
            <textarea
                className="commentInput"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button className="commentButton" onClick={handleComment}>
                Comment
            </button>
        </div>
    );
};

export default Comment;
