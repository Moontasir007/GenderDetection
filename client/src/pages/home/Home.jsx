import { useEffect, useState } from "react"
import Header from "../../components/header/header"
import Posts from "../../components/posts/posts"
import Sidebar from "../../components/sidebar/sidebar"
import Footer from "../../components/footer/footer"
import "./Home.css"
import axios from "axios"



export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("/posts")
            setPosts(res.data)
        };
        fetchPost()
    }, []);
    return (
        <>
            <Header />
            <div className="Home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
            <Footer />
        </>

    )
}
