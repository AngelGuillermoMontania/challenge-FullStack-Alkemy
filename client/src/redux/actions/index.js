import axios from 'axios'

export const LOAD_USER = 'LOAD_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const LOAD_MOVES = 'LOAD_MOVES';

export function loadUser(email) {
    return async (dispatch) => {
        let userDB = await axios.post('http://localhost:3001/users',{
            email
        });
        if(userDB.data.ok) {
            return dispatch({
                type: LOAD_USER,
                payload: userDB.data.data
            })
        }
    }
}

export function clearUser() {
    return ({
        type: CLEAR_USER,
        payload: {}
    })
}

export function loadMoves(id) {
    return async (dispatch) => {
        let allMoves = await axios.get(`http://localhost:3001/moves?id=${id}`);
        if(allMoves.data.ok) {
            return dispatch({
                type: LOAD_MOVES,
                payload: allMoves.data.data
            })
        }
    }
}