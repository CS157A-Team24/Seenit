import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestPosts } from '../actions/Post';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import PostList from '../components/PostList';
import HomeContainers from '../components/HomeContainers';

const CenterContainer = styled.div`
	width: 900px;
`

const Home = ({ post, requestPosts }) => {

	useEffect(() => {
		requestPosts();
	}, [requestPosts]);

	return (
		<Grid container direction="row" justify="center">
			<CenterContainer>
				<Grid container direction="row" justify="center" alignItems="flex-start" spacing={3} style={{marginBottom: 0}}>
					<Grid item xs={8}>
						<PostList post={post} />
					</Grid>
					<Grid item xs={4}>
						<HomeContainers />
					</Grid>
				</Grid>
			</CenterContainer>
		</Grid>
	);
};

const mapStateToProps = state => ({
	post: state.post
});

const mapDispatchToProps = { requestPosts };

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// React Hook + Redux
// import React, { useEffect } from 'react';
// import PostList from '../components/PostList';
// import { useDispatch, useSelector } from 'react-redux';
// import { requestPosts } from '../actions/Post';

// const Home = () => {

// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		dispatch(requestPosts());
// 	},[]);

// 	// const posts = useSelector(state => 
// 	// 	state = state.post.posts
// 	// )

// 	return (
// 		<div>
// 			{/* {
// 				JSON.stringify(posts)
// 			} */}
// 			<PostList />
// 		</div>
// 	);
// }

// export default Home;