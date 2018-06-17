import React, { Component } from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'
import Home from '../components/Home.jsx'
import { createBrowserHistory } from 'history';

const hist = createBrowserHistory();

const Routes = () => {
    return(
        <Router history={ hist }>
            <Switch>
                <IndexRoute component={Home} />
                <Route path="me" component={Home} />
                {/* <Redirect from="*" to="/" /> */}
            </Switch>
        </Router>
    );
}

export default Routes