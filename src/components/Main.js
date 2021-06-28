import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Signin from './Signin';

import Home from "./Home";
import Admins from "./admins/Admins"
import Users from "./users/Users";
import Organizations from "./organizations/Organizations";
import Roles from "./roles/Roles";
// import Contact from "./Contact";
import MainDrawer from './Drawer';

class Main extends Component {
    render() {
        return (
            <div>

                <Route render={() =>
                    sessionStorage.getItem('isLoggedIn') === true || sessionStorage.getItem('isLoggedIn') === "true" ?
                        sessionStorage.getItem('isSuperAdmin') === true || sessionStorage.getItem('isSuperAdmin') === 'true' ?
                            <div>
                                <MainDrawer />
                                <Switch>
                                    <Route exact from="/" render={() => <Home />} />
                                    <Route exact from="/users" render={() => <Users />} />
                                    <Route exact from="/admins" render={() => <Admins />} />
                                    <Route exact from="/organizations" render={() => <Organizations />} />
                                    <Route exact from="/roles" render={() => <Roles />} />
                                </Switch>
                            </div>
                            : sessionStorage.getItem('isAdmin') === true || sessionStorage.getItem('isAdmin') === 'true' ?
                                <div>
                                    <MainDrawer />
                                    <Switch>
                                        <Route exact from="/" render={() => <Home />} />
                                        <Route exact from="/users" render={() => <Users />} />
                                        <Route exact from="/roles" render={() => <Roles />} />
                                    </Switch>
                                </div>
                                : <div>
                                    <MainDrawer />
                                    <Switch>
                                        <Route exact from="/" render={() => <Home />} />
                                    </Switch>
                                </div>
                        : <Signin />
                } />

            </div>
        )
    }
}

export default Main;