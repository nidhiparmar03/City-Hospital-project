import { call, put, takeEvery, all } from "redux-saga/effects";
import * as ActionTypes from "../redux/ActionTypes";
import { ForgotPassApi, googleWithSigninApi, SignInapi, SignOutapi, SignUpApi } from '../Common/Auth.api';
import { history } from '../History';
import { setAlert } from "../redux/action/alert.action";
import { signedInAction, signedOutAction } from '../redux/action/auth.action';

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

function* SignOut(action) {
  try {
    const user = yield call(SignOutapi);
    yield put(signedOutAction(user))
    history.push('/');
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}

function* forgotPassword(action) {
  try {
    const user = yield call(ForgotPassApi, action.payload)
    yield put(signedOutAction(user))
    history.push('/');
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}

function* googlewithSignin(action) {
  try {
    const user = yield call(googleWithSigninApi, action.payload);
    yield put(signedInAction(user))
    history.push('/');
    yield put(setAlert({ text: "Login Is SuccessFully", color: "success" }))
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

function* watchSignOut() {
  yield takeEvery(ActionTypes.SIGN_OUT, SignOut)
}

function* watchForgotPass() {
  yield takeEvery(ActionTypes.FORGOT_PASSWORD, forgotPassword)
}

function* watchGoogleWithSignin() {
  yield takeEvery(ActionTypes.GOOGLESIGN_IN, googlewithSignin)
}
export function* signUpSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchSignOut(),
    watchForgotPass(),
    watchGoogleWithSignin()
  ]);
}
