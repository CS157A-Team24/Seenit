import{
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_ERROR
} from '../constants/ActionTypes';

const intialState = { normalizedComments: null };

export default (state = intialState, action) => {
    switch(action.type){
        case FETCH_COMMENTS_REQUEST:
            return { ...state, isFetching: true};
        case FETCH_COMMENTS_SUCCESS:
            return { ...state, isFetching: false, normalizedComments: action.comments};
        case FETCH_COMMENTS_ERROR:
            return { ...state, isFetching: false};
        default:
            return { ...state};
    }
}