import { combineReducers } from 'redux';
import post from './post';
import channel from './channel';

export default combineReducers({
	post,
	channel
});