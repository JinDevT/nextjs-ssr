const dummyUser = {
  id: 1,
  nickname: "JinDevT",
  Posts: [],
  Followings: [],
  Followers: [],
};

export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const LOG_IN = "LOG_IN"; // 액션의 이름
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"; // 액션의 이름
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"; // 액션의 이름
export const LOG_OUT = "LOG_OUT";

export const signUpAction = data => {
  return {
    type: SIGN_UP,
    data,
  };
};

export const signUpSuccess = {
  type: SIGN_UP_SUCCESS,
};

export const loginAction = data => {
  return {
    type: LOG_IN,
    data,
  };
};
export const logoutAction = () => {
  return {
    type: LOG_OUT,
  };
};
export const signUp = data => {
  return {
    type: SIGN_UP,
    data,
  };
};

// thunk example
// thunk 말고 saga를 쓰는이우
// 지연 같은 기능은 thunk는 직접 구현해야한다. (setTimeout())
// saga는 지원을 해줌.
export const loginAction = data => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(loginRequestAction());
    axios
      .post("/api/login")
      .then(res => {
        dispatch(loginSuccessAction());
      })
      .catch(err => {
        dispatch(loginFailureAction(err));
      });
  };
};

const useReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
        loginData: action.data,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default useReducer;
