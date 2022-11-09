import React from "react";
import { Link } from "react-router-dom";
const UsersListPage = () => {
    const users = [0, 1, 2, 3, 4];
    return (
        <>
            <h1>Users List Page</h1>
            <ul>
                {users.map((user) => (
                    <li key={user}>
                        <Link to={`/users/${user}/profile`}>User {user}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default UsersListPage;
