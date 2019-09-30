import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import post from './post';

export default combineReducers({
	simpleReducer,
	post
});