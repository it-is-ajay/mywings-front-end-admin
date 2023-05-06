import axios from "axios"
import "../Users/viewusers.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";

export function ViewUsers() {
    const dispatch = useDispatch();
    const [searchUserData, setSearchUserData] = useState([]);
    const [userName, setUserName] = useState("");

    const fetchAllUsers1 = async ()=>{
        let response = await axios.get("http://localhost:3000/admin/viewUsers");
        setSearchUserData(response.data.allUsers)
    }

    const searchUser = async () => {
        try {
            if(userName === ""){
                fetchAllUsers1();
            }else{
            let response = await axios.get("http://localhost:3000/user/searchProfile/" + userName);
            setSearchUserData(response.data.user)
            }
        } catch (error) {
            toast.warning("something went wrong")
        }
    }

    useEffect(() => {
        fetchAllUsers1();
        searchUser();
    }, [])
    return <>
        <h1>Users component</h1>
        <div className="form-group">
            <input className="form-control searchUser ms-2" onKeyUp={searchUser} onChange={(event) => setUserName(event.target.value)} type="text" placeholder="Enter User Name " />
        </div>
        <div className="tableDiv">
            <table className="table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {searchUserData.map((user, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            <td>{user.status + ""}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </>
}