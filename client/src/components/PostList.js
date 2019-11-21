import React from 'react';
// import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import PostContainer from './PostContainer';
import { Link } from 'react-router-dom';


const PostList = ({ post }) => {
    // const state = useSelector(state => state.simpleReducer);
    return (
        <div>
            {
                post.isFetching &&
                <div style={{ marginTop: "3%" }}>
                    <CircularProgress />
                </div>
            }
            {
                !post.isFetching && post.posts.length > 0 &&
                post.posts.map((post, index) => (
                    <Link to={`/post/${index + 1}`} key={index} style={{ textDecoration: 'none' }}>
                        {PostContainer(post,index)}
                    </Link>
                ))
            }
        </div>
    )
}

// const mapStateToProps = state => ({
//     posts: state.post.posts
// });

// export default connect(mapStateToProps)(PostList);

export default PostList;
