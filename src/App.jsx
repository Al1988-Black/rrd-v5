import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UsersLayout from "./layouts/UsersLayout";
import AppLayout from "./layouts/AppLayout";

function App() {
    return (
        <div>
            <AppLayout />
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/users" component={UsersLayout} />
                <Redirect from="*" to="/" />
            </Switch>
        </div>
    );
}
export default App;
