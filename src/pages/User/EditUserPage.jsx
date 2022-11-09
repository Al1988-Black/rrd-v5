import React from "react";
import { useParams, Link } from "react-router-dom";

const EditUserPage = () => {
    const { userId } = useParams();
    const anotherUserId = Number(userId) === 4 ? 0 : Number(userId) + 1;
    return (
        <div>
            <h1>Edit User Page</h1>
            <ul>
                <li>
                    <Link to={`/users/${userId}/profile`}>
                        Users Profile Page
                    </Link>
                </li>
                <li>
                    <Link to={`/users/${anotherUserId}/profile`}>
                        Another User
                    </Link>
                </li>
                <li>
                    <Link to="/users/">Users List Page</Link>
                </li>
            </ul>
        </div>
    );
};

export default EditUserPage;
