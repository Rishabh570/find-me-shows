import 'babel-polyfill'
import React from 'react'
import ReactDOM from "react-dom";
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Home from './containers/Home.jsx'

const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={ store }>
        <Router history={hist}>
            <Switch>
                <Route exact path="/home" component={Home} />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('root'));