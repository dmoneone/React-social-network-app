import {Auth_API, Security_API} from "../API/api"
import { stopSubmit } from "redux-form"


const initialState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captcha: null as string | null
}

type StateType = typeof initialState

const AuthReducer = (state: StateType = initialState,action: any): StateType => {
    switch(action.type){
        case 'social-netowork/AuthReducer/USER-AUTH': {
            return {
                ...state,
                ...action.data,
                isAuth: action.resultCode === 0 ? true : false,
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

const USER_AUTH: string = 'social-netowork/AuthReducer/USER-AUTH'
const SET_CAPTCHA: string = 'social-netowork/AuthReducer/SET-CAPTCHA'

type SetUserAuthActionDataType = {
    userId: number | null
    email: string | null
    login: string | null
}

type SetUserAuthActionType = {
    type: typeof USER_AUTH,
    data: SetUserAuthActionDataType,
    resultCode: number | undefined
}

export const setUserAuth = (userId: number | null, email: string | null, login: string | null, resultCode: number | undefined = undefined): SetUserAuthActionType => ({
     type: USER_AUTH,
     data: {userId, email, login},
     resultCode
})

type SetCaptchaActionType = {
    type: typeof SET_CAPTCHA
    captchaUrl: string
}

const setCaptcha = (captchaUrl: string): SetCaptchaActionType => ({type: SET_CAPTCHA, captchaUrl})

export const getAuth = () => async (dispatch: Function) => {
    const data = await Auth_API.authMe() 
    dispatch(setUserAuth(data.data.id, data.data.email, data.data.login, data.resultCode))
}

const getCaptcha = () => async (dispatch: Function) => {
    const res = await Security_API.getCaptcha()
    const url = res.data.url
    dispatch(setCaptcha(url))
}

export const login = (email: string,password: string,rememberMe: boolean,captcha: string | null) => async (dispatch: Function) => {
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

export const logout = () => async (dispatch: Function) => {
    const data = await Auth_API.logout()
    if(data.data.resultCode === 0) {
        dispatch(setUserAuth(null, null, null))
                
    }
}


export default AuthReducer;