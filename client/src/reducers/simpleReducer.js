import { SIMPLE_ACTION } from '../actions/actionTypes';

const initialState = {
	result: "Initial",
	posts:[
		{
			postedBy : "Vite",
			atChannel : "programming",
			time: 6,
			points: 15,
			title: "Test",
			content: "Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought."
		},
		{
			postedBy : "Kulo",
			atChannel : "programming",
			time: 8,
			points: 20,
			title: "Test1",
			content: "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment."
		},
	]
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SIMPLE_ACTION:
			return {
				...state,
				result: action.payload
			}

		default:
			return { ...state };

	}
};
