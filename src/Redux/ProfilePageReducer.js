const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_MSG = 'UPDATE-NEW-POST-MSG';
const REMOVE_POST = 'REMOVE-POST';

export const creatorAddPostAction = (time) => ({type: ADD_POST,time});
export const creatorUpdateNewPostMsgAction = (newPostMsg) => ({type: UPDATE_NEW_POST_MSG,newPostMsg});
export const creatorRemovePostAction = (msg) => ({type: REMOVE_POST,msg});

const initialState = {
    newPostMsg : 'Input anything',
    postsData : [
        {msg: "jopa", quantityOfLikes: 10, time: 8},
        {msg: "Chlen", quantityOfLikes: 100, time: 9},
        {msg: "1", quantityOfLikes: 100,time: 22222222222222222},
        {msg: "Chl2222en", quantityOfLikes: 100, time: 7}
    ]
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

        default: return state;
    }
}

export default profilePageReducer;