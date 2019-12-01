import{
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_ERROR
} from '../constants/ActionTypes';

import {
    getCommentsby,
} from '../utils/api';

const fetchCommentsRequest = { type: FETCH_COMMENTS_REQUEST };
const fetchCommentsSuccess = comments => ({ type: FETCH_COMMENTS_SUCCESS, comments });
const fetchCommentsError = error => ({ type: FETCH_COMMENTS_ERROR, error });

export const requestComments = (postId) => async dispatch => {
    dispatch(fetchCommentsRequest);
    try{
        const comments = await getCommentsby(postId);
        dispatch(fetchCommentsSuccess(comments));
    }catch(err){
        dispatch(fetchCommentsError(err));
    }
}