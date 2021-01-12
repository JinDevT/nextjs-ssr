import { all, fork } from "redux-saga/effects";
import userSaga from "./user";
import postSaga from "./post";

// rootSaga에서는 해당saga만 fork해준다.
export default function* rootSata() {
  yield all([fork(userSaga), fork(postSaga)]);
}
