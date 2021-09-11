import {
    SET_DATE,
    SET_NAME,
} from "../actions/types";

const initialState = {
    user: null
}
export const name = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            return {...state, user: action.payload}
        default:
            return {...state}
    }
}
