import {Profile_API} from "../API/api"

const ADD_POST = 'ADD-POST'
const REMOVE_POST = 'REMOVE-POST'
const SET_PROFILE = 'SET-PROFILE'
const EDIT_STATUS = 'EDIT-STATUS'

export const creatorAddPostAction = (time,msg) => ({type: ADD_POST,time,msg});
export const creatorRemovePostAction = (msg) => ({type: REMOVE_POST,msg});
export const setProfile = profile => ({type: SET_PROFILE,profile})
export const editStatus = status => ({type: EDIT_STATUS,status})
//thunk
export const getProfile = (id,authorized) => {
    return dispatch => {
        Profile_API
          .getUserProfile(id,authorized)
          .then(data => {
            dispatch(setProfile(data))
          })
    }
}

export const getStatus = (id,authorized) => {
    return dispatch => {
        Profile_API
         .getUserStatus(id,authorized)
         .then(status => {
             dispatch(editStatus(status))
         })
    }
}

export const setStatus = (status) => {
    return dispatch => {
        Profile_API
         .setUserStatus(status)
         .then(() => {
             dispatch(editStatus(status))
         })
    }
}

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
        case 'ADD-POST':
        return {
            ...state,
            postsData: [...state.postsData,{id: action.time, msg: action.msg, time: action.time, quantityOfLikes: 0}]
        }


        case 'REMOVE-POST':
        const filteredPostsData = state.postsData.filter(item => item.msg !== action.msg);
        return {
            ...state,
            postsData: filteredPostsData
        }

        case 'SET-PROFILE': {
            return {
                ...state,
                currentProfile: action.profile
            }
        }

        case 'EDIT-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        default: return state;
    }
}

export default profilePageReducer;