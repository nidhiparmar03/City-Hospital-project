import * as ActionTypes from "../ActionTypes"

export const signupAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGN_UP, payload: data})
}