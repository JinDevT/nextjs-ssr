import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

// reducer가 함수기 때문에 쉽게 합치지 못한다.
// 그래서 combineReducers를 사용한다.
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});
export type RootState = {
  user: ReturnType<typeof user>;
  post: ReturnType<typeof post>;
};

export default rootReducer;
