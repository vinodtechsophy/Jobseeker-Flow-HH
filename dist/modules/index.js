import { combineReducers } from "redux";
import currentUser from "./userState";
import notificationAlert from "./notificationState";
import tabsState from "./controlTabs";
export default combineReducers({
    currentUser: currentUser,
    notificationAlert: notificationAlert,
    tabsState: tabsState,
});
