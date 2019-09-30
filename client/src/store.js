import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers/root-reducer';

export default function configureStore() {
	return createStore(
		Reducer,
		applyMiddleware(thunk)
	);
}