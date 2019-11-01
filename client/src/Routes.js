import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';

let Routes = () => (
	<Switch>
		<Route exact path="/">
			<Home />
		</Route>
		<Route exact path="/register" component={Register} />
       		<Route exact path="/login" component={Login} />
	</Switch>
)

export default Routes;
