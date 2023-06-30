import "./settings.css"
import Sidebar from "../../components/sidebar/sidebar"
import Footer from '../../components/footer/footer'

export default function settings() {
    return (
        <>
            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsUpdateTitle">Update your account</span><span className="settingsDeleteTitle">Delete your account</span>
                    </div>
                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <div className="settingsPP">
                            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R64718410&ga=GA1.2.299819484.1668252753&semt=sph" alt="" />
                            <label htmlFor="fileInput">
                                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                            </label>
                            <input type="file" id="fileInput" style={{ display: "none" }} />
                        </div>
                        <label>UserName</label>
                        <input type="text" placeholder="Mamun" /><label>Email</label>
                        <input type="email" placeholder="mamun@gmail.com" /><label>Password</label>
                        <input type="passwprd" />
                        <button className="settingsSubmit">Update</button>
                    </form>
                </div>
                <Sidebar />
            </div>
            <Footer />
        </>

    )
}
