import { combineReducers } from "redux";
import currentUser from "./userState";
import notificationAlert from "./notificationState";

export default combineReducers({
  currentUser,
  notificationAlert
});