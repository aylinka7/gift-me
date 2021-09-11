import { SET_NAME} from "./types";

export const setName5= (letter) => {
    return {
        type: SET_NAME,
        payload: letter,
    }
}

