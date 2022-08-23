import { signUpSaga } from "./authSaga";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([signUpSaga()]);
}
