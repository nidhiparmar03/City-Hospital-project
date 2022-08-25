import { call, put, takeEvery, all } from "redux-saga/effects";
import * as ActionTypes from "../redux/ActionTypes";
import { SignInapi, SignUpApi } from "../Common/Auth.api";
import { setAlert } from "../redux/action/alert.action";

function* signUp(action) {
  try {
    const user = yield call(SignUpApi, action.payload);
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
  }
}

function* SignIn(action) {
  try {
    const user = yield call(SignInapi, action.payload);
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}


function* watchSignUp() {
  yield takeEvery(ActionTypes.SIGN_UP, signUp);
}

function* watchSignIn() {
  yield takeEvery(ActionTypes.SIGN_IN, SignIn);
}


export function* signUpSaga() {
  yield all([
    watchSignUp(),
    watchSignIn()
  ]);
}
