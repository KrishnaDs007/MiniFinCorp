/**
 * Redux UI Actions
 *
 * @description Action creators for UI state management
 * @author Krishna Devashish
 * @email krishnadevashish17@gmail.com
 * @github https://github.com/KrishnaDs007
 */

import { UPDATE_ACTIVE_ROUTE } from "./actionConstants";

export const updateActiveRoute = (val) => ({
	type: UPDATE_ACTIVE_ROUTE,
});

export const updateActiveTheme = () => ({
	type: UPDATE_ACTIVE_ROUTE,
});
