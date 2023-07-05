import React, { useState } from "react";
import axios from "axios";
import './PostForm.css'

const PostForm = () => {
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState(null);

    const handleDescChange = (e) => {
        setDesc(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a new FormData object
        const formData = new FormData();
        formData.append("desc", desc);
        formData.append("image", image);

        try {
            // Send a POST request to the server to create a new post
            const response = await axios.post("/api/posts", formData);
            console.log(response.data);
            // Handle the response as needed
        } catch (error) {
            console.log(error);
        }

        setDesc("");
        setImage(null);
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div>
                <label htmlFor="desc">Description:</label>
                <textarea
                    id="desc"
                    value={desc}
                    onChange={handleDescChange}
                    required
                ></textarea>
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input
                    type="file"
                    id="image"
                    accept=".jpg,.png,.jpeg"
                    onChange={handleImageChange}
                    required
                />
            </div>
            <button type="submit">Publish</button>
        </form>
    );
};

export default PostForm;
