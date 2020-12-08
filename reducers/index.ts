import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};

// action creator
export const loginAction = data => {
  return {
    type: "LOGIN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOGOUT",
  };
};

// (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case "LOGIN":
      return {
        ...state,
        user: {
          ...state.user, // 바꾸지 않은 data
          isLoggedIn: true, // 바꾸고 싶은 data
        },
      };

    case "LOGOUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };

    default:
      return state;
  }
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
