import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import EditUserPage from "../pages/User/EditUserPage";
import UserPage from "../pages/User/UserPage";
import UsersListPage from "../pages/UserListPage";

const UsersLayout = () => {
    return (
        <div>
            <h1>Users Layout</h1>
            <NavLink to="/">Main Page</NavLink>
            <Switch>
                <Route path="/users" exact component={UsersListPage} />
                <Route
                    path="/users/:userId/profile"
                    exact
                    component={UserPage}
                />
                <Route
                    path="/users/:userId/edit"
                    exact
                    component={EditUserPage}
                />
                <Redirect from="/users/:userId/*" to="/users/:userId/profile" />
                <Redirect from="/users/:userId" to="/users/:userId/profile" />
            </Switch>
        </div>
    );
};

export default UsersLayout;
