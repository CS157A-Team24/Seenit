import React from 'react';
import { connect } from 'react-redux';
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
                post.posts.map(content => (
                    <Link to={`/post/${content.post.id}`} key={content.post.id} style={{ textDecoration: 'none' }}>
                        <PostContainer postDetails={content}/>
                    </Link>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps)(PostList);

// export default PostList;
