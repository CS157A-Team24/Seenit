import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';

let Routes = () => (
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
    </Switch>
)

export default Routes;