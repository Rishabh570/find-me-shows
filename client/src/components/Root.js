import React, { Component } from 'react'
import { BrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/index'
import Home from './Home'


const hist = BrowserHistory();

class Root extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Router history={hist}>
                    <Switch>
                        <Route exact path="/home" component={Home} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
};

export default Root