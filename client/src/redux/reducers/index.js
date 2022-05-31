import {
    LOAD_USER,
    CLEAR_USER,
    LOAD_CATEGORIES,
    CLEAR_CATEGORIES,
    LOAD_MOVEMENTS,
    CLEAR_MOVEMENTS
} from "../actions/index";

const initialState = {
    movements: [],
    user: {},
    categories: [],
    entries: 0
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
        case LOAD_CATEGORIES:
            return ({
                ...state,
                categories: action.payload
            })
        case CLEAR_CATEGORIES:
            return ({
                ...state,
                categories: action.payload
            })
        case LOAD_MOVEMENTS:
            let entries = action.payload.filter(movement => movement.type === "ENTRY").reduce((accumulator, currentValue) => accumulator + Number(currentValue.amount), 0)
            let exits = action.payload.filter(movement => movement.type === "EXIT").reduce((accumulator, currentValue) => accumulator + Number(currentValue.amount), 0)
            return ({
                ...state,
                movements: action.payload.reverse(),
                entries,
                exits
            })
        case CLEAR_MOVEMENTS:
            return ({
                ...state,
                movements: action.payload
            })
        default:
            return {
                ...state,
            };
    };
};

export default rootReducer;