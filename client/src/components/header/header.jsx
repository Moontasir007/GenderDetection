import "./header.css"

export default function header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesSm">React & Node</span><span className="headerTitlesLg">Blog</span>
            </div>
            <img src="https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg?size=626&ext=jpg&uid=R64718410&ga=GA1.2.299819484.1668252753&semt=sph" alt="" className="headerImg" />
        </div>
    )
}
