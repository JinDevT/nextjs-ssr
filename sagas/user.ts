import { all, fork, delay, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function loginAPI(data) {
  return axios.post("/api/login", data);
}

function logoutAPI() {
  return axios.post("/api/logout");
}

function* login(action) {
  try {
    yield delay(1000);
    yield put({
      type: "LOGIN_SUCCESS",
      // 성공 결과
    });
  } catch (err) {
    yield put({
      type: "LOGIN_FAILURE",
      // 실패 결과
      data: err.response.data,
    });
  }
}

function* logout(action) {
  try {
    yield delay(1000);
    yield put({
      type: "LOGOUT_SUCCESS",
      // 성공 결과
    });
  } catch (err) {
    yield put({
      type: "LOGOUT_FAILURE",
      // 실패 결과
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeEvery("LOGIN_REQUEST", login);
}

function* watchLogOut() {
  yield takeEvery("LOGOUT_REQUEST", logout);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
