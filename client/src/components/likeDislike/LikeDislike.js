import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./likeDislike.css";

const LikeDislike = ({ post }) => {
    const { user } = useContext(Context);
    const [likes, setLikes] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setIsLiked(post.likes.includes(user?._id));
        setIsDisliked(post.dislikes.includes(user?._id));
        setLikes(post.likes.length);
    }, [post.likes, post.dislikes, user]);

    const handleLike = () => {
        if (!user) {
            // Handle user not logged in
            history.push("/login");
            return;
        }

        if (isLiked) {
            // If already liked, remove the like
            axios
                .post(`/posts/${post._id}/unlike`, { userId: user._id })
                .then((res) => {
                    setLikes(res.data.likes.length);
                    setIsLiked(false);
                    setIsDisliked(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            // If not liked, add the like
            axios
                .post(`/posts/${post._id}/like`, { userId: user._id })
                .then((res) => {
                    setLikes(res.data.likes.length);
                    setIsLiked(true);
                    setIsDisliked(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleDislike = () => {
        if (!user) {
            // Handle user not logged in
            history.push("/login");
            return;
        }

        if (isDisliked) {
            // If already disliked, remove the dislike
            axios
                .post(`/posts/${post._id}/undislike`, { userId: user._id })
                .then((res) => {
                    setLikes(res.data.likes.length);
                    setIsLiked(false);
                    setIsDisliked(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            // If not disliked, add the dislike
            axios
                .post(`/posts/${post._id}/dislike`, { userId: user._id })
                .then((res) => {
                    setLikes(res.data.likes.length);
                    setIsLiked(false);
                    setIsDisliked(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className="likeDislike">
            <div className="likeDislikeItem">
                <i
                    className={`likeIcon far fa-thumbs-up ${isLiked ? "liked" : ""}`}
                    onClick={handleLike}
                ></i>
                <span className="likeCounter">{likes}</span>
            </div>
            <div className="likeDislikeItem">
                <i
                    className={`dislikeIcon far fa-thumbs-down ${isDisliked ? "disliked" : ""
                        }`}
                    onClick={handleDislike}
                ></i>
            </div>
        </div>
    );
};

export default LikeDislike;
