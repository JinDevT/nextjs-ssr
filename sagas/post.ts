import { all, fork, delay, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function addPostAPI(data) {
  return axios.post("/api/login", data);
}

function* addPost(action) {
  try {
    yield delay(1000);
    yield put({
      type: "ADD_POST_SUCCESS",
      // 성공 결과
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      // 실패 결과
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeEvery("ADD_POST_REQUEST", addPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
