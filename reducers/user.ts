import { HYDRATE } from "next-redux-wrapper";

const LOGIN = "main/LOGIN" as const;

type userType = {
  isLoggedIn: boolean;
  user: any;
};

const initialState: userType = {
  isLoggedIn: false,
  user: null,
};

// action creator
export const loginAction = data => {
  return {
    type: LOGIN,
    data,
  };
};

// (이전상태, 액션) => 다음상태
function user(state: userType = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case LOGIN:
      return {
        user: action.data,
        isLoggedIn: true,
      };

    // case "LOGOUT":
    //   return {
    //     ...state,
    //     users: {
    //       ...state.users,
    //       isLoggedIn: false,
    //       user: null,
    //     },
    //   };

    default:
      return state;
  }
}

export default user;
