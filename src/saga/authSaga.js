import { call, put, takeEvery, all } from "redux-saga/effects";
// import Api from '...'

function* signUp(action) {
  try {
    const user = yield call(SignUpApi, action.payload);
  } catch (e) {}
}

function* watchSignUp() {
  yield takeEvery(ActionTypes.SIGN_UP, signUp);
}

export function* signUpSaga() {
  yield all([watchSignUp]);
}
