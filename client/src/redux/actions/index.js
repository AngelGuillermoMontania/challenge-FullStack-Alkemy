import axios from 'axios'

export const LOAD_USER = 'LOAD_USER';
export const CLEAR_USER = 'CLEAR_USER';

export function loadUser(email) {
    return async (dispatch) => {
        let userDB = await axios.post('http://localhost:3001/users',{
            email
        });
        console.log(userDB.data)
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