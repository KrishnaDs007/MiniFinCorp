/**
 * Redux UI Reducer
 *
 * @description Reducer for UI state management
 * @author Krishna Devashish
 * @email krishnadevashish17@gmail.com
 * @github https://github.com/KrishnaDs007
 */

import { UPDATE_ACTIVE_ROUTE } from "../Actions/actionConstants";

const initialState = {
	activeRoute: "/home",
};
const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_ACTIVE_ROUTE:
			return {
				...state,
				activeRoute: action.value,
			};
		default:
			return state;
	}
};

export default uiReducer;
