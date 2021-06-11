import { SET_USER_DETAIL } from "../constants/action";

export const userReducer = (state, action) => {
	const { 
		type, 
		payload,
	} = action;

	switch(type) {
		case SET_USER_DETAIL:
			return {
				...state,
				user: payload.user,
			};
		default: 
			return state;
	}
}