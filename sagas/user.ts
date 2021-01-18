import { all, fork, delay, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../reducers/user";

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
      type: LOG_IN_SUCCESS,
      data: action.data,
      // 성공 결과
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      // 실패 결과
      error: err.response.data,
    });
  }
}

function* logout(action) {
  try {
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
      // 성공 결과
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      // 실패 결과
      error: err.response.data,
    });
  }
}

function* signup() {
  try {
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
      // 성공 결과
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      // 실패 결과
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logout);
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signup);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
