import { combineReducers } from 'redux';
import post from './post';
import channel from './channel';
import comment from './comment';

export default combineReducers({
	post,
	channel,
	comment
});