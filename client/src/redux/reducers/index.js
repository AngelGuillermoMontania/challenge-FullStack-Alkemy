const initialState = {
    moves: [],
    user: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_MOVES":
            return ({
                ...state,
                moves: action.payload
            })
        case "LOAD_USER":
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