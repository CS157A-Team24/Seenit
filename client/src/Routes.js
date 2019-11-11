import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Channel from './views/Channel';
// import Login from './views/Login';
// import Register from './views/Register';

let Routes = () => (
	<Switch>
		<Route exact path="/">
			<Home />
		</Route>
		<Route exact path="/channel" component={Channel}/>
		{/* <Route exact path="/register" component={Register} /> */}
       		{/* <Route exact path="/login" component={Login} /> */}
	</Switch>
)

export default Routes;
