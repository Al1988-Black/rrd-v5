import React from "react";
import { useParams, NavLink } from "react-router-dom";

const UserPage = () => {
    const { userId } = useParams();
    return (
        <div>
            <h1>User Page</h1>
            <ul>
                <li>
                    <NavLink to="/users">Users List Page</NavLink>
                </li>
                <li>
                    <NavLink to={`/users/${userId}/edit`}>
                        Edit this user
                    </NavLink>
                </li>
            </ul>
            <p>userId:{userId}</p>
        </div>
    );
};

export default UserPage;

/* <ul>
                <li><Link to="/users">Users List Page</Link></li>
                <li><Link to={`/users/${userId}/edit`}>Edit this user</Link></li>
            </ul> */
/* <p>userId:{userId}</p> */
