import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "../modules";
var store = configureStore({ reducer: rootReducer });
export default store;
