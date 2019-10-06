import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR
} from '../actions/ActionTypes';

const initialState = { isFetching: false, posts: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return { ...state, isFetching: true, post: null, newPost: null };
        case FETCH_POSTS_SUCCESS:
            return { ...state, isFetching: false, posts: action.posts };
        case FETCH_POSTS_ERROR:
            return { ...state, isFetching: false };
        default:
            return { ...state };
    }
}