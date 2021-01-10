import { all, fork, take, call, put } from "redux-saga/effects";
import axios from "axios";
// all : 배열을 받음 -> 배열안에 있는것을 한번에 실행함. 동시실행
// fork : 함수를 실행함 - 비동기 함수 호출
// call : 동기 함수 호출
// take : login이란 액션이 실행될 때 까지 기다리겠다.
// put : disptach 라는 의미

function loginAPI(data) {
  // data : yield call할 때 넘어온 인자
  return axios.post("/api/login", data);
}

function* login(action) {
  try {
    // call 대신 fork를 쓰면 data를 받아오기 전에 다음 코드가 실행됨.
    // api 요청할 때는 call을 사용하자.
    // call(함수, 매개변수)
    // 매개변수는 loginAPI의 파라미터로 간다.
    const result = yield call(loginAPI, action.data);
    yield put({
      type: "LOGIN_SUCCESS",
      // 성공 결과
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOGIN_FAILURE",
      // 실패 결과
      data: err.response.data,
    });
  }
}

function* watchLogin() {
  // LOGIN_REQUEST 액션이 들어오면 login generator을 실행한다.
  yield take("LOGIN_REQUEST", login);
}

export default function* rootSata() {
  yield all([fork(watchLogin)]);
}
