import API from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_MSG = 'UPDATE-NEW-POST-MSG';
const REMOVE_POST = 'REMOVE-POST';
const SET_PROFILE = 'SET-PROFILE'

export const creatorAddPostAction = (time) => ({type: ADD_POST,time});
export const creatorUpdateNewPostMsgAction = (newPostMsg) => ({type: UPDATE_NEW_POST_MSG,newPostMsg});
export const creatorRemovePostAction = (msg) => ({type: REMOVE_POST,msg});
export const setProfile = profile => ({type: SET_PROFILE,profile})
//thunk
export const getProfile = (id,authorized) => {
    return dispatch => {
        API
          .getUserProfile(id,authorized)
          .then(data => {
            dispatch(setProfile(data))
          })
    }
}

const initialState = {
    newPostMsg : 'Input anything',
    postsData : [
        {msg: "jopa", quantityOfLikes: 10, time: '6 Dec 2019 22:13:20'},
        {msg: "Chlen", quantityOfLikes: 100, time: '6 Dec 2019 22:13:21'},
        {msg: "1", quantityOfLikes: 100,time: '6 Dec 2019 22:13:22'},
        {msg: "Chl2222en", quantityOfLikes: 100, time: '6 Dec 2019 22:13:23'}
    ],
    currentProfile: null
}

const profilePageReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADD-POST':
        return {
            ...state,
            newPostMsg: '',
            postsData: [...state.postsData,{id: action.time, msg: state.newPostMsg, time: action.time, quantityOfLikes: 0}]
        }

        case 'UPDATE-NEW-POST-MSG':
        return {
            ...state,
            newPostMsg: action.newPostMsg
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
        default: return state;
    }
}

export default profilePageReducer;