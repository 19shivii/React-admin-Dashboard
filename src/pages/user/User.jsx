import { PermIdentity } from "@material-ui/icons"
import "./user.css"
export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddBtn">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Shivani Gupta</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Acount Details</span>
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">Shivani23</span>
                    </div>
                </div>
                <div className="userUpdate"></div>
            </div>
        </div>
    )
}
