import * as ActionTypes from "../ActionTypes"

export const signupAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGN_UP, payload: data})
}
export const signInAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGN_IN, payload: data})
}
    