import React, { Component } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Body from "./components/body";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="" component={Body} key="body" />
                    <Redirect  to='/' />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default App;
