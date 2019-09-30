import React from 'react';
import PostList from '../components/PostList';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
	return (
		<div>
			<PostList />
		</div>
	);
}

export default Home;