import axios from "axios";

export const LOAD_USER = "LOAD_USER";
export const CLEAR_USER = "CLEAR_USER";
export const LOAD_MOVEMENTS = "LOAD_MOVEMENTS";
export const CLEAR_MOVEMENTS = "CLEAR_MOVEMENTS";
export const FILTERAMOUNT_MOVEMENTS = "FILTERAMOUNT_MOVEMENTS";
export const LOAD_CATEGORIES = "LOAD_CATEGORIES";
export const CLEAR_CATEGORIES = "CLEAR_CATEGORIES";

export function loadUser(email) {
    return async (dispatch) => {
        try {
            let userDB = await axios.post("http://localhost:3001/users",{
                email
            });
            if(userDB.data.ok) {
                return dispatch({
                    type: LOAD_USER,
                    payload: userDB.data.data
                })
            };
        } catch (error) {
            console.log(error.message);
        }
    }
};

export function clearUser() {
    return ({
        type: CLEAR_USER,
        payload: {}
    });
};

export function createCategory(form) {
    return async (dispatch) => {
        try {
            let allCategories = await axios.post(`http://localhost:3001/categories/create`, form);
            if(allCategories.data.ok) {
                return dispatch({
                    type: LOAD_CATEGORIES,
                    payload: allCategories.data.data
                })
            };
        } catch (error) {
            console.log(error.message);
        }
    }
};

export function loadCategories(id) {
    return async (dispatch) => {
        try {
            let allCategories = await axios.get(`http://localhost:3001/categories?id=${id}`);
            if(allCategories.data.ok) {
                return dispatch({
                    type: LOAD_CATEGORIES,
                    payload: allCategories.data.data
                });
            };
        } catch (error) {
            console.log(error.message);
        }
    }
}

export function clearCategories() {
    return ({
        type: CLEAR_CATEGORIES,
        payload: {}
    });
};

export function clearMovements() {
    return ({
        type: CLEAR_MOVEMENTS,
        payload: {}
    });
};

export function createMovement(form) {
    return async (dispatch) => {
        try {
            let allMoves = await axios.post(`http://localhost:3001/movements/create`, form);
            if(allMoves.data.ok) {
                return dispatch({
                    type: LOAD_MOVEMENTS,
                    payload: allMoves.data.data
                })
            };
        } catch (error) {
            console.log(error.message);
        }
    }
};

export function loadMovements(id) {
    return async (dispatch) => {
        try {
            let allMovements = await axios.get(`http://localhost:3001/movements?id=${id}`);
            if(allMovements.data.ok) {
                return dispatch({
                    type: LOAD_MOVEMENTS,
                    payload: allMovements.data.data
                });
            };
        } catch (error) {
            console.log(error.message);
        }
    }
};

export function updateMovement(form) {
    return async (dispatch) => {
        try {
            let allMovements = await axios.put(`http://localhost:3001/movements/edit`, form);
            if(allMovements.data.ok) {
                return dispatch({
                    type: LOAD_MOVEMENTS,
                    payload: allMovements.data.data
                });
            };
        } catch (error) {
            console.log(error.message);
        }
    }
}

export function deleteMovement(id) {
    return async (dispatch) => {
        try {
            let allMovements = await axios.delete(`http://localhost:3001/movements/delete?id=${id}`);
            if(allMovements.data.ok) {
                return dispatch({
                    type: LOAD_MOVEMENTS,
                    payload: allMovements.data.data
                });
            };
        } catch (error) {
            console.log(error.message);
        }
    }
};

export function filterType(UserId, value) {
    return async (dispatch) => {
        try {
            let allMovements = await axios.get(`http://localhost:3001/movements/type?UserId=${UserId}&method=${value}`);
            if(allMovements.data.ok) {
                return dispatch({
                    type: LOAD_MOVEMENTS,
                    payload: allMovements.data.data
                });
            };
        } catch (error) {
            console.log(error.message);
        }
    }
};

export function filterCategory(UserId, value) {
    return async (dispatch) => {
        try {
            let allMovements = await axios.get(`http://localhost:3001/movements/category?UserId=${UserId}&category=${value}`);
            if(allMovements.data.ok) {
                return dispatch({
                    type: LOAD_MOVEMENTS,
                    payload: allMovements.data.data
                });
            };
        } catch (error) {
            console.log(error.message);
        }
    }
};