import React, { Component } from 'react';
import { Router, Route, Switch, HashRouter, Redirect,IndexRoute } from 'react-router-dom';
import history from '../components/history';
import NoMatch from '../components/404';
// import Home from '../page/Home';
import Login from '../components/Login';
import App from '../App';
// import UserList from '../page/UserList';
// import Main from '../page/Main';

class ASRSRouter extends Component {
    render() {
        const home = "/asrs";
        return (
            <HashRouter>
                <Router history = {history}>
                    <Switch>
                        <Route exact path = "/" render = {() => <Redirect to = '/asrs' />} />
                        <Route exact path = {home} component = {App} />
                        {/* <IndexRoute component = {App} /> */}
                        <Route exact path = "/login" component = {Login} />
                        <Route component = {NoMatch}/>
                    </Switch>
                </Router>               
            </HashRouter>
       );
    }
}

export default ASRSRouter;