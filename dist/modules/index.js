import { combineReducers } from "redux";
import currentUser from "./userState";
export default combineReducers({
    currentUser: currentUser
});
