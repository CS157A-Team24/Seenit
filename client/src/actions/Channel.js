import{
    FETCH_CHANNELS_REQUEST,
    FETCH_CHANNELS_SUCCESS,
    FETCH_CHANNELS_ERROR
} from '../constants/ActionTypes';

import {
    getTop5Channels
} from '../utils/api';

const fetchChannelsRequest = {type: FETCH_CHANNELS_REQUEST};
const fetchChannelsSuccess = channel => ({type: FETCH_CHANNELS_SUCCESS, channel});
const fetchChannelsError = error => ({type: FETCH_CHANNELS_ERROR, error});

export const requestTop5Channels = () => async dispatch =>{
    dispatch(fetchChannelsRequest);
    try{
        const channel = await getTop5Channels();
        dispatch(fetchChannelsSuccess(channel));
    }catch(error){
        dispatch(fetchChannelsError(error))
    }
}

