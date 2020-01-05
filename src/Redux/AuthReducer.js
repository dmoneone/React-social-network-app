import {Auth_API} from "../API/api"
import { stopSubmit } from "redux-form"

const USER_AUTH = 'USER-AUTH'

export const setUserAuth = (userId, email, login, resultCode = undefined) => ({ type: USER_AUTH, data: {userId, email, login}, resultCode })
//thunk

export const getAuth = () => {
    return dispatch => {
        return Auth_API
            .authMe()
            .then(data => {
                dispatch(setUserAuth(data.data.id, data.data.email, data.data.login, data.resultCode))
            })
    }
}

export const login = (email,password,rememberMe) => dispatch => {
    Auth_API
        .login(email,password,rememberMe)
        .then(data => {
            if(data.data.resultCode === 0) {
                dispatch(getAuth())
            } else {
                const error_msg = data.data.messages.length > 0 ? data.data.messages[0] : 'Input error'
                dispatch(stopSubmit('login',{_error: error_msg}))
            }
        })
}

export const logout = () => dispatch => {
    Auth_API
        .logout()
        .then(data => {
            if(data.data.resultCode === 0) {
                dispatch(setUserAuth(null, null, null))
                
            }
        })
}

const initialState = {
   userId: null,
   login: null,
   email: null,
   isAuth: false
}

const AuthReducer = (state = initialState,action) => {
    switch(action.type){
        case 'USER-AUTH': {
            return {
                ...state,
                ...action.data,
                isAuth: action.resultCode === 0 ? true : false
            }
        }
        default: return state;
    }
}

export default AuthReducer;