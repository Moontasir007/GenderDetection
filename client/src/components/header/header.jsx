import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./header.css";

export default function Header() {
    const titleRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.5 });

        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1 }
        ).fromTo(
            imageRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1 },
            "-=0.5"
        );
    }, []);

    return (
        <div className="header">
            <div className="headerTitles" ref={titleRef}>
                <span className="headerTitlesSm">A SIMPLE HELP TOOL</span>
                <span className="headerTitlesLg">GENDER</span>
            </div>
            <img
                src="https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg?size=626&ext=jpg&uid=R64718410&ga=GA1.2.299819484.1668252753&semt=sph"
                alt=""
                className="headerImg"
                ref={imageRef}
            />
        </div>
    );
}
