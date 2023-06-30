import { gsap } from "gsap";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../../context/Context";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
    const { user, dispatch } = useContext(Context);
    const topRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            topRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1 }
        );
    }, []);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div className="top" ref={topRef}>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/classify">
                            CLASSIFY
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/contact">
                            CONTACT
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/tutorial">
                            TUTORIAL
                        </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img src={user.profilePic} alt="" className="topImg" />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}
