import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App';
import Navbar from './components/Navbar';
import AddAccount from './components/AddAccount';
import EditAccount from './components/EditAccount';
import Signup from './components/Signup';
import Login from './components/Login';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/add-account" component={AddAccount} />
                <Route path="/edit-account/:id" component={EditAccount} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;