import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import PostList from "../../components/postlist/PostList";
import axios from "axios";
import PostForm from "../../components/postform/PostForm";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get("/api/posts/"); // Replace with your API endpoint for fetching posts
            console.log(response);
            setPosts(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(posts)
    return (
        <>

            <Header />
            <div className="Home">
                <PostForm />
                <PostList posts={posts} />
            </div>
            <Footer />


        </>
    );
}