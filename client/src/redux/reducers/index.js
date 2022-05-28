import {
    LOAD_USER,
    CLEAR_USER
} from '../actions/index';

const initialState = {
    moves: [],
    user: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER:
            return ({
                ...state,
                user: action.payload
            })
        case CLEAR_USER:
            return ({
                ...state,
                user: action.payload
            })
        default:
            return {
                ...state,
            };
    };
};

export default rootReducer;