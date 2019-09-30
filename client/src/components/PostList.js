import React from 'react';
import { useSelector } from 'react-redux';

import PostContainer from './PostContainer';

const PostList = () => {
    const state = useSelector(state => state.simpleReducer);
    return(
        <div>
            {
                state.posts.map(post => (
                    PostContainer(post)
                ))
            }
        </div>
    )
}

export default PostList;
