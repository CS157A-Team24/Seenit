import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_ERROR
} from '../constants/ActionTypes';

import {
    getPosts,
    getAPost
} from '../utils/api';

import {
    requestChannelDetails
} from './Channel';

const fetchPostsRequest = { type: FETCH_POSTS_REQUEST };
const fetchPostsSuccess = posts => ({ type: FETCH_POSTS_SUCCESS, posts });
const fetchPostsError = error => ({ type: FETCH_POSTS_ERROR, error });

const fetchAPostRequest = { type: FETCH_POST_REQUEST };
const fetchAPostSuccess = post => ({ type: FETCH_POST_SUCCESS, post });
const fetchAPostError = error => ({ type: FETCH_POST_ERROR, error });

export const requestPosts = (channel = '') => async dispatch => {
    dispatch(fetchPostsRequest);
    try {
        const posts = await getPosts(channel);
        dispatch(fetchPostsSuccess(posts));
    } catch (error) {
        dispatch(fetchPostsError(error));
    }
};

export const requestAPost = (postId) => async dispatch => {
    dispatch(fetchAPostRequest);
    try {
        const post = await getAPost(postId);
        dispatch(fetchAPostSuccess(post));
        dispatch(requestChannelDetails(post.channel.id));
    } catch (error) {
        dispatch(fetchAPostError(error));
    }
};