import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import EditUser from './components/EditUser';

const Router = () => {
    return (
        <BrowserRouter>
            <Route  exact path="/" component={App} />
            <Route  path="/edit/:id" component={EditUser} />
        </BrowserRouter>
    );
}

export default Router;
