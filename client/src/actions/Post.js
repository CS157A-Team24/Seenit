import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_ERROR,
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_ERROR
} from '../constants/ActionTypes';

import {
    getPosts,
    getSortedPosts,
    getAPost,
    createAPost,
    getSearchedPosts
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

const createPostSuccess = post => ({ type: CREATE_POST_SUCCESS, post });
const createPostError = error => ({ type: CREATE_POST_ERROR, error });

export const requestPosts = (channel = '', sortby='', search='') => async dispatch => {
    dispatch(fetchPostsRequest);
    try {
        if(search === ""){
            const posts = await getPosts(channel,sortby);
            dispatch(fetchPostsSuccess(posts));
        }else{
            const posts = await getSearchedPosts(search);
            dispatch(fetchPostsSuccess(posts));
        }

    } catch (error) {
        dispatch(fetchPostsError(error));
    }
};

export const requestSearchedPosts = (queryTerm) => async dispatch => {
    dispatch(fetchPostsRequest);
    try {
        const posts = await getSearchedPosts(queryTerm);
        dispatch(fetchPostsSuccess(posts));
    } catch (error) {
        dispatch(fetchPostsError(error));
    }
};

export const requestSortedPosts = (sortby) => async dispatch => {
    dispatch(fetchPostsRequest);
    try {
        const posts = await getSortedPosts(sortby);
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

export const postAPost = (newPost) => async dispatch => {
    dispatch({type: CREATE_POST_REQUEST});
    try{
        const post = await createAPost(newPost);
        dispatch(createPostSuccess(post));
    }catch (error) {
        dispatch(createPostError(error));
    }
}
