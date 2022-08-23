import { call, takeEvery, all } from "redux-saga/effects";
import * as ActionTypes from "../redux/ActionTypes";
import { SignUpApi } from "../common/signUpApi";

function* signUp(action) {
  try {
    const signUpUser = yield call(SignUpApi, action.payload);
    console.log(signUpUser);
  } catch (e) {}
}

function* watchSignUp() {
  yield takeEvery(ActionTypes.SIGN_UP, signUp);
}

export function* signUpSaga() {
  yield all([watchSignUp()]);
}
