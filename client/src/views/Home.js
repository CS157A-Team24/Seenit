import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import { requestPosts } from '../actions/Post';
import { requestTop5Channels } from '../actions/Channel';

import PostList from '../components/PostList';
import HomeContainers from '../components/HomeContainers';
import SortBar from '../components/SortBar';


const CenterContainer = styled.div`
	margin: 0 15%;
	width: 100%;
`

const Home = ({ requestPosts, requestTop5Channels }) => {

	useEffect(() => {
		requestPosts();
		requestTop5Channels();
	}, [requestPosts, requestTop5Channels]);

	return (
		<div>
			<SortBar/>
			<Grid container direction="row" justify="center">
				<CenterContainer>
					<Grid container direction="row" justify="center" alignItems="flex-start" spacing={3} style={{ marginBottom: 0 }}>
						<Grid item xs={8}>
							<PostList />
						</Grid>
						<Grid item xs={4}>
							<HomeContainers />
						</Grid>
					</Grid>
				</CenterContainer>
			</Grid>
		</div>
	);
};


const mapDispatchToProps = { requestPosts, requestTop5Channels };

export default connect(null, mapDispatchToProps)(Home);

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