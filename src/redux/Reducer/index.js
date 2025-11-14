/**
 * Redux Root Reducer
 *
 * @description Combines all reducers for the application
 * @author Krishna Devashish
 * @email krishnadevashish17@gmail.com
 * @github https://github.com/KrishnaDs007
 */

import { combineReducers } from "redux";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
	uiReducer,
});

export default rootReducer;
