import React from "react";
import { NavLink } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <h1>App Layout</h1>
            <NavLink to="/users">Users list Page</NavLink>
        </div>
    );
};

export default AppLayout;
