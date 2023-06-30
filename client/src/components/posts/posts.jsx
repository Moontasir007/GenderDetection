import "./posts.css"
import Post from "../post/post"

export default function posts({ posts }) {
    return (
        <div className="posts">
            {posts.map((p, i) => (
                <Post post={p} key={i} />
            ))}

        </div>


    )
}
