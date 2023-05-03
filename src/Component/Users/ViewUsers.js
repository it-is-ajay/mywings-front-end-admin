import axios from "axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchAllUsers } from "../../redux-config/userSlice";

export function ViewUsers() {
    const dispatch = useDispatch();
    const { userList } = useSelector(state => state.allUser);
    console.log(userList);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [])
    return <>
        <h1>Users component</h1>
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
                {userList.map((user, index) =>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{user.contact}</td>
                        <td>{user.status+""}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
}