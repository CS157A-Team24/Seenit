import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestPosts } from '../actions/Post';
import { Grid } from '@material-ui/core';

import PostList from '../components/PostList';

const Home = ({ post, requestPosts }) => {

	useEffect(() => {
		requestPosts();
	}, [requestPosts]);

	return (
		<div className="removeLater-marker">
			<Grid container direction="row" justify="center">
				<div className="center-area">
					<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
						<Grid item xs={8}>
							<PostList post={post} />
						</Grid>
						<Grid item xs={4}>

						</Grid>
					</Grid>
				</div>
			</Grid>
		</div>
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