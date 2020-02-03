import {Profile_API} from "../API/api"
import { stopSubmit } from "redux-form";

const initialState = {
    postsData : [
        {msg: "jopa", quantityOfLikes: 10, time: '6 Dec 2019 22:13:20'},
        {msg: "Chlen", quantityOfLikes: 100, time: '6 Dec 2019 22:13:21'},
        {msg: "1", quantityOfLikes: 100,time: '6 Dec 2019 22:13:22'},
        {msg: "Chl2222en", quantityOfLikes: 100, time: '6 Dec 2019 22:13:23'}
    ],
    currentProfile: null,
    status: 'Some Status'
}

const profilePageReducer = (state = initialState,action) => {
    switch(action.type){
        case 'social-network/ProfilePageReducer/ADD-POST':
        return {
            ...state,
            postsData: [...state.postsData,{id: action.time, msg: action.msg, time: action.time, quantityOfLikes: 0}]
        }

        case 'social-network/ProfilePageReducer/REMOVE-POST':
        const filteredPostsData = state.postsData.filter(item => item.msg !== action.msg);
        return {
            ...state,
            postsData: filteredPostsData
        }

        case 'social-network/ProfilePageReducer/SET-PROFILE': {
            return {
                ...state,
                currentProfile: action.profile
            }
        }

        case 'social-network/ProfilePageReducer/EDIT-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'social-network/ProfilePageReducer/SAVE-PHOTO' : {
            return {
                ...state,
                currentProfile: {...state.currentProfile,photos: action.photos}
            }
        }
        default: return state;
    }
}

const ADD_POST = 'social-network/ProfilePageReducer/ADD-POST'
const REMOVE_POST = 'social-network/ProfilePageReducer/REMOVE-POST'
const SET_PROFILE = 'social-network/ProfilePageReducer/SET-PROFILE'
const EDIT_STATUS = 'social-network/ProfilePageReducer/EDIT-STATUS'
const SAVE_PHOTO = 'social-network/ProfilePageReducer/SAVE-PHOTO'

export const creatorAddPostAction = (time,msg) => ({type: ADD_POST,time,msg});
export const creatorRemovePostAction = (msg) => ({type: REMOVE_POST,msg});
export const setProfile = profile => ({type: SET_PROFILE,profile})
export const editStatus = status => ({type: EDIT_STATUS,status})
export const savePhoto = photos => ({type: SAVE_PHOTO,photos})

export const getProfile = (id,authorized) => async dispatch => {
    const data = await Profile_API.getUserProfile(id,authorized)
    dispatch(setProfile(data))
}

export const saveProfileChanges = (payload) => async (dispatch,getState) => {
    const data = await Profile_API.setProfile(payload)
    if(data.data.resultCode === 0){
        dispatch(getProfile(null,getState().auth.userId))
    } else {
        const error_msg = data.data.messages.length > 0 ? data.data.messages[0] : 'Input error'
        dispatch(stopSubmit('profile-data-form',{_error: error_msg}))
        return Promise.reject(data.data.messages[0])
    }
}

export const getStatus = (id,authorized) => async dispatch => {
    const status = await Profile_API.getUserStatus(id,authorized)
    dispatch(editStatus(status))
}

export const setStatus = (status) => async dispatch => {
    await Profile_API.setUserStatus(status)
    dispatch(editStatus(status))
}

export const updatePhoto = photo  => async dispatch => {
    const res = await Profile_API.savePhoto(photo)
    if(res.data.resultCode === 0) {
        debugger
        dispatch(savePhoto(res.data.data.photos))
    }
}



export default profilePageReducer;