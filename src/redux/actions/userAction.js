import { userConstants } from "../constants/userConstants"
import { userService } from "../../services/userService"
import { createBrowserHistory } from 'history'
const history = createBrowserHistory();



function login(username, password) {
    return dispatch => {
        dispatch(loginRequest({ username }));
        userService.login(username, password)
            .then(user => {
                dispatch(loginSuccess(user));
                history.push('/welcome', history.location)
                history.go()
            })
            .catch(err => {
                dispatch(loginErrors(err.response.data))
            })
    }
}
const loginRequest = user => ({
    type: userConstants.LOGIN_REQUEST,
    payload: user
})
const loginSuccess = user => ({
    type: userConstants.LOGIN_SUCCESS,
    payload: user
})
const loginErrors = error => ({
    type: userConstants.LOGIN_FAILURE,
    payload: error
})
function logout() {
    userService.logout()
    return { type: userConstants.LOGOUT };
}


// REGISTER
function register(users) {
    return dispatch => {
        dispatch(registerRequest(users));
        userService.register(users)
            .then(user => {
                dispatch(registerSuccess(user));
                history.push('/welcome', history.location)
                history.go()
            })
            .catch(err => {
                dispatch(registerErrors(err.response))
            })
    }
}
const registerRequest = user => ({
    type: userConstants.REGISTER_REQUEST,
    payload: user
})
const registerSuccess = user => ({
    type: userConstants.REGISTER_SUCCESS,
    payload: user
})
const registerErrors = error => ({
    type: userConstants.REGISTER_FAILURE,
    payload: error
})


// AVATAR UPDATE
const avatarUpdateToState =  file   => ({
    type: userConstants.AVATAR_UPDATE_TO_STATE,
    payload: file
})

function avatarUpdate(file, users ) {
    return dispatch => {
        dispatch(avatarUpdateRequest(file));
        userService.avatarUpdate(file, users)
            .then(user => {
                dispatch(avatarUpdateSuccess(user.data));
            })
            .catch(err => {
                dispatch(avatarUpdateErrors(err.response))
            })
    }
}
const avatarUpdateRequest = file => ({
    type: userConstants.AVATAR_UPDATE_REQUEST,
    payload: file
})
const avatarUpdateSuccess = file => ({
    type: userConstants.AVATAR_UPDATE_SUCCESS,
    payload: file
})
const avatarUpdateErrors = error => ({
    type: userConstants.AVATAR_UPDATE_FAILURE,
    payload: error
})


//UPDATE
const update = (user) => {

    return dispatch => {
        dispatch(updateRequest(user));
        userService.udpate(user)
            .then(user => {
                dispatch(updateSuccess(user.data));
                // history.push('/welcome', history.location)
                // history.go()
            })
            .catch(err => {
                dispatch(updateErrors(err.response))
            })
    }
}
const updateRequest = user => ({
    type: userConstants.UPDATE_REQUEST,
    payload: user
})
const updateSuccess = user => ({
    type: userConstants.UPDATE_SUCCESS,
    payload: user
})
const updateErrors = error => ({
    type: userConstants.UPDATE_FAILURE,
    payload: error
})


export const userActions = {
    login,
    logout,
    register,
    avatarUpdateToState,
    avatarUpdate,
    update
}
