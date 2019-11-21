import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Channel from './views/Channel';
import Post from './views/Post';
import Login from './views/Login';
import Register from './views/Register';

let Routes = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/channel/:channelName" component={Channel} />
		<Route exact path="/post/:postId" component={Post} />
		<Route exact path="/register" component={Register} />
       	<Route exact path="/login" component={Login} />
	</Switch>
)

export default Routes;
