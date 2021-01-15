import "redux";
import { Task } from "redux-saga";

declare module "redux" {
  // next + typescript + redux-saga에서
  // sagaTask를 사용하기 위해서 선언을 해줘야한다.
  export interface Store {
    sagaTask?: Task;
  }
}
