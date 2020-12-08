import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";

const configureStore = () => {
  const store = createStore(reducer);
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
