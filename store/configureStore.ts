import { createWrapper } from "next-redux-wrapper";
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";

// 액션이 일어났을 떄, action을 console로 보는 middleware
// 로깅해주는 middleware
const loggerMiddleware = ({ dispatch, getState }) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  // middlewares에 사용하고자 하는 middleware를 설정한다.
  const middlewares = [, loggerMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;

// redux 개념
// 중앙저장소 -> action({type: "CHANGE_NICNAME", data: "JinDevT"})
// -> action을 dispatch -> reducer(switch case..(reducer를 통해 저장소가 바뀜.))

// reducer에서 return { ...state } 하는 이유: 불변성!
// 굳이 왜 spread를 사용하냐? 안바뀌는애들은 참조관계를 유지할 수 있어서 메모리를 아낄 수 있다.
// 왜 객체를 새로 만들어주냐? -> 이전 기록과 다음 기록이 둘다 남아있기 때문에.

// ex) cont prev { name: "max"}
// const next = prev;
// next.name = "JinDevT";
// prev.name // JinDevT  => 이전 값이 변해버림.

// redux의 장점
// 액션들이 기록이 되서(추적이 되서) 버그 잡기가 쉽다.

// redux의 단점
// 코드량이 많아진다. (잘 쪼개서 사용해야함.)
