import{
    FETCH_CHANNELS_REQUEST,
    FETCH_CHANNELS_SUCCESS,
    FETCH_CHANNELS_ERROR
} from '../constants/ActionTypes';

const initialState = { isFetching: false, topChannel:{} };

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHANNELS_REQUEST:
            return { ...state, isFetching: true};
        case FETCH_CHANNELS_SUCCESS:
            return { ...state, isFetching: false, topChannel: action.channel};
        case FETCH_CHANNELS_ERROR:
            return { ...state, isFetching: false};
        default:
            return { ...state};
    }
}
