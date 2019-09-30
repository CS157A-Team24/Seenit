import { SIMPLE_ACTION } from '../actions/actionTypes';

const initialState = {
    result: "Initial"
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
