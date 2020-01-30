import {Profile_API} from "../API/api"

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
        default: return state;
    }
}

const ADD_POST = 'social-network/ProfilePageReducer/ADD-POST'
const REMOVE_POST = 'social-network/ProfilePageReducer/REMOVE-POST'
const SET_PROFILE = 'social-network/ProfilePageReducer/SET-PROFILE'
const EDIT_STATUS = 'social-network/ProfilePageReducer/EDIT-STATUS'

export const creatorAddPostAction = (time,msg) => ({type: ADD_POST,time,msg});
export const creatorRemovePostAction = (msg) => ({type: REMOVE_POST,msg});
export const setProfile = profile => ({type: SET_PROFILE,profile})
export const editStatus = status => ({type: EDIT_STATUS,status})

export const getProfile = (id,authorized) => async dispatch => {
    const data = await Profile_API.getUserProfile(id,authorized)
    dispatch(setProfile(data))
}

export const saveProfileChanges = (payload) => async dispatch => {
    const data = await Profile_API.setProfile(payload)
    if(data.data.resultCode === 0){
        //dispatch(getProfile)
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



export default profilePageReducer;