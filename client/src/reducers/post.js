import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_ERROR
} from '../constants/ActionTypes';

const initialState = { isFetching: false, posts: [], postDetails: null};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return { ...state, isFetching: true, post: null, newPost: null };
        case FETCH_POSTS_SUCCESS:
            return { ...state, isFetching: false, posts: action.posts };
        case FETCH_POSTS_ERROR:
            return { ...state, isFetching: false };

        case FETCH_POST_REQUEST:
            return { ...state, isFetching: true, postDetails: null};
        case FETCH_POST_SUCCESS:
            return { ...state, isFetching: false, postDetails: action.post };
        case FETCH_POST_ERROR:
            return { ...state, isFetching: false };

        default:
            return { ...state };
    }
}