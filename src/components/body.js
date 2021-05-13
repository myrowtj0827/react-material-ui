import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"

import '../assets/css/index.css';
import Home from "./home";
import Header from "./header";
import Footer from "./footer";
import Calculator from "./calculator";

class Body extends Component {
    render() {
        return (
            <>
                <section className="home-body">
                    <Header />
                </section>
                <Switch>
                    <Route
                        path='/home'
                        component={Home}
                    />
                    <Route
                        path='/calculator/:slug?'
                        component={Calculator}
                    />
                    <Redirect
                        to='/home'
                    />
                </Switch>
                <section className="pt-135">
                    <Footer />
                </section>
            </>
        )
    }
}
export default Body;