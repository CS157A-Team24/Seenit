import{
    FETCH_CHANNELS_REQUEST,
    FETCH_CHANNELS_SUCCESS,
    FETCH_CHANNELS_ERROR,
    FETCH_CHANNEL_DETAILS_SUCCESS
} from '../constants/ActionTypes';

import {
    getTop5Channels,
    getChannelDetails
} from '../utils/api';

const fetchChannelsRequest = {type: FETCH_CHANNELS_REQUEST};
const fetchChannelsSuccess = channel => ({type: FETCH_CHANNELS_SUCCESS, channel});
const fetchChannelDetailsSuccess = channelDetails => ({type: FETCH_CHANNEL_DETAILS_SUCCESS, channelDetails});
const fetchChannelsError = error => ({type: FETCH_CHANNELS_ERROR, error});

export const requestTop5Channels = () => async dispatch =>{
    dispatch(fetchChannelsRequest);
    try{
        const channel = await getTop5Channels();
        dispatch(fetchChannelsSuccess(channel));
    }catch(error){
        dispatch(fetchChannelsError(error));
    }
}

export const requestChannelDetails = (channelId) => async dispatch => {
    dispatch(fetchChannelsRequest)
    try{
        const channelDetails = await getChannelDetails(channelId);
        dispatch(fetchChannelDetailsSuccess(channelDetails));
    }catch(error){
        dispatch(fetchChannelsError);
    }
}

