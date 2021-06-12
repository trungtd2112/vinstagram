import { createContext, useReducer } from "react";
import { SET_USER_DETAIL } from "../constants/action";
import { userReducer } from "../reducers/userReducer";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [userState, dispatch] = useReducer(userReducer, {
		user: null,
	});

	const setUserDetail = async (user) => {
		dispatch({
			type: SET_USER_DETAIL,
			payload: {
				user,
			},
		});
	}

	const userContextData = {
		userState,
		setUserDetail,
	};

	return (
<		UserContext.Provider value={userContextData}>
			{ children }
		</UserContext.Provider>
	)
}

export default UserContextProvider;