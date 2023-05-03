import { Link } from "react-router-dom";
import "./sidebar.css";
export function SideBar() {
    return <>
        <div className="sidebar">
            <div className="linkBox">
                <a className="active" ><img height={"30px"} width={"150px"} src="/img/logo-no-background.png"/></a>
            </div>
            <div className="linkBox">
                <Link to="/">Home</Link>
            </div>
            <div className="linkBox">
                <Link to="/viewuser">View Users</Link>
            </div>
            <div className="linkBox">
                <a href="#collaborationdetails">Collaboration Details</a>
            </div>
            <div className="linkBox">
                <a href="#interestedcontestants">Interested Contestants</a>
            </div>
            <div className="linkBox">
                <a href="#selectedcontestants">Selected Contestants</a>
            </div>
        </div>
    </>
}