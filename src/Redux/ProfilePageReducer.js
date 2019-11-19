const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_MSG = 'UPDATE-NEW-POST-MSG';

export const creatorAddPostAction = () => ({type: ADD_POST})
export const creatorUpdateNewPostMsgAction = (newPostMsg) => ({type: UPDATE_NEW_POST_MSG,newPostMsg: newPostMsg})

const profilePageReducer = (state,action) => {
    switch(action.type){
        case 'ADD-POST':
            const newPost = {
                msg: state.newPostMsg,
                quantityOfLikes: 0
            }
            state.postsData.push(newPost);
            state.newPostMsg = '';
        return state;

        case 'UPDATE-NEW-POST-MSG':
            state.newPostMsg = action.newPostMsg;
        return state;
        default: return state;
    }
}

export default profilePageReducer;