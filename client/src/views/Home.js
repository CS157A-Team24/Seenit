import React, { useEffect } from 'react';
import PostList from '../components/PostList';
import { useDispatch } from 'react-redux';
import { requestPosts } from '../actions/Post';

const Home = () => {
	
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(requestPosts());
	});

	return (
		<div>
			<PostList />
		</div>
	);
}

export default Home;