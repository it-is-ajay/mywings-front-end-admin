import { Link } from "react-router-dom";
import "./sidebar.css";
export function SideBar() {
    return <>
        <div className="sidebar" >
            <div className="linkBox">
                <a className="active" ><img height={"30px"} width={"150px"} src="/img/logo-no-background.png" /><button className="b btn" type="button" onClick={myFunction}>
                    <i class="fa fa-bars"></i>
                </button></a>
            </div>
            <div className="icon" id="demo">
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
                <div className="linkBox">
                    <a href="#selectedcontestants">Spam Users</a>
                </div>
            </div>
        </div>
    </>
}
function myFunction() {
    var x = document.getElementById("demo");

    if(x.style.display == "")
        x.style.display = "block";
    else if(x.style.display == "none")
        x.style.display = "block"
    else if(x.style.display == "block")
        x.style.display = "none";
    }