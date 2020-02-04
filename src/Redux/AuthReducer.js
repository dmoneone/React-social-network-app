import {Auth_API, Security_API} from "../API/api"
import { stopSubmit } from "redux-form"

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null
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
        case 'social-netowork/AuthReducer/SET-CAPTCHA': {
            return {
                ...state,
                captcha: action.captchaUrl
            }
        }
        default: return state;
    }
}

const USER_AUTH = 'social-netowork/AuthReducer/USER-AUTH'
const SET_CAPTCHA = 'social-netowork/AuthReducer/SET-CAPTCHA'

export const setUserAuth = (userId, email, login, resultCode = undefined) => ({ type: USER_AUTH, data: {userId, email, login}, resultCode })
const setCaptcha = captchaUrl => ({type: SET_CAPTCHA, captchaUrl})

export const getAuth = () => async dispatch => {
    const data = await Auth_API.authMe() 
    dispatch(setUserAuth(data.data.id, data.data.email, data.data.login, data.resultCode))
}

const getCaptcha = () => async dispatch => {
    const res = await Security_API.getCaptcha()
    const url = res.data.url
    dispatch(setCaptcha(url))
}

export const login = (email,password,rememberMe,captcha) => async dispatch => {
    const data = await Auth_API.login(email,password,rememberMe,captcha)
    if(data.data.resultCode === 0) {
        dispatch(getAuth())
    } else {
        if(data.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
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