import { call, takeEvery, all } from "redux-saga/effects";
import * as ActionTypes from "../redux/ActionTypes";
import { SignInapi, SignUpApi } from "../Common/Auth.api";

function* signUp(action) {
  try {
    const user = yield call(SignUpApi, action.payload);
    console.log(user);
  } catch (e) {}
}

function* SignIn(action){
  try{
    const user = yield call(SignInapi , action.payload);
    console.log(user);
  }catch (e) {}
}


function* watchSignUp() {
  yield takeEvery(ActionTypes.SIGN_UP, signUp);
}

function* watchSignIn(){
  yield takeEvery(ActionTypes.SIGN_IN , SignIn);
}


export function* signUpSaga() {
  yield all([
    watchSignUp(),
    watchSignIn()
  ]);
}
