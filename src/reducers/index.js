import { combineReducers } from "redux";
import { sideBar } from "./sideBar";

const rootReducer = combineReducers({
    sideBar : sideBar
})

export default rootReducer;