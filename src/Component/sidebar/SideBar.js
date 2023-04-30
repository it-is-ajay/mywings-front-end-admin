import "./sidebar.css";
export function SideBar() {
    return <>
        <div className="sidebar">
            <div className="linkBox">
                <a className="active" ><img height={"30px"} width={"150px"} src="/img/logo-no-background.png"/></a>
            </div>
            <div className="linkBox">
                <a href="#home">Home</a>
            </div>
            <div className="linkBox">
                <a href="#viewuser">View Users</a>
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