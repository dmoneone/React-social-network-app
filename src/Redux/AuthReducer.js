import {Auth_API} from "../API/api"
import { stopSubmit } from "redux-form"

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
 }

const AuthReducer = (state = initialState,action) => {
    switch(action.type){
        case 'social-netowork/AuthReducer/USER-AUTH': {
            return {
                ...state,
                ...action.data,
                isAuth: action.resultCode === 0 ? true : false
            }
        }
        default: return state;
    }
}

const USER_AUTH = 'social-netowork/AuthReducer/USER-AUTH'

export const setUserAuth = (userId, email, login, resultCode = undefined) => ({ type: USER_AUTH, data: {userId, email, login}, resultCode })

export const getAuth = () => async dispatch => {
    const data = await Auth_API.authMe() 
    dispatch(setUserAuth(data.data.id, data.data.email, data.data.login, data.resultCode))
}

export const login = (email,password,rememberMe) => async dispatch => {
    const data = await Auth_API.login(email,password,rememberMe)
    if(data.data.resultCode === 0) {
        dispatch(getAuth())
    } else {
        const error_msg = data.data.messages.length > 0 ? data.data.messages[0] : 'Input error'
        dispatch(stopSubmit('login',{_error: error_msg}))
    }
}

export const logout = () => async dispatch => {
    const data = await Auth_API.logout()
    if(data.data.resultCode === 0) {
        dispatch(setUserAuth(null, null, null))
                
    }
}

export default AuthReducer;