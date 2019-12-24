import {Auth_API} from "../API/api"

const USER_AUTH = 'USER-AUTH'

export const setUserAuth = (data) => ({type: USER_AUTH,data: data.data,resultCode: data.resultCode})
//thunk

export const getAuth = () => {
    return dispatch => {
        Auth_API
        .authMe('auth/me')
        .then(data => {
            dispatch(setUserAuth(data))
        })
    }
}

const initialState = {
   id: null,
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