import "./single.css"
import Sidebar from "../../components/sidebar/sidebar"
import Singlepost from "../../components/singlepost/Singlepost"

export default function Single() {
    return (
        <div className='single'>
            <Singlepost />
            <Sidebar />
        </div>
    )
}
