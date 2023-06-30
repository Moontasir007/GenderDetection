import { useEffect, useState } from "react"
import "./sidebar.css"
import axios from "axios"

export default function Sidebar() {

    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&uid=R64718410&ga=GA1.2.299819484.1668252753&semt=sph" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae culpa et maiores, veniam consequatur inventore ex cumque ullam enim atque ea.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <li className="sidebarListItem">{c.name}</li>
                    ))}


                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                </div>
            </div>
        </div>
    )
}
