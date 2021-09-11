import {combineReducers} from "redux";
import {firstName, name} from "./reducers"

const allReducers = combineReducers({
    name,
})

export default allReducers;
