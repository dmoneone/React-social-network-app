const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_MSG = 'UPDATE-NEW-POST-MSG';
const UPDATE_NEW_MSG = 'UPDATE-NEW-MSG';
const SEND_MSG = 'SEND-MSG';

const store = {
    _state: {
        dialogsPage : {
            newMsg: 'input anythin',
            chatList : [
                {name: 'Kurash', id: 1},
                {name: 'Salo', id: 2},
                {name: 'Kate', id: 3}
            ],
            messagesList: [
                {msg: "Dash pisky ebat?"},
                {msg: "228"},
                {msg: "ass"}
            ],
            messages : [

            ]
        },
        profilePage : {
            newPostMsg : 'Input anything',
            postsData : [
                {msg: "jopa", quantityOfLikes: 10},
                {msg: "Chlen", quantityOfLikes: 100},
                {msg: "1", quantityOfLikes: 100},
                {msg: "Chl2222en", quantityOfLikes: 100}
            ]
        },
        navComponent : {
            sidebar : {
                friends : [{name: 'Alex'},{name: 'Kate'},{name: 'Jora'}]
            }
        }
    },
    get state (){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch(action.type){
            case 'ADD-POST':
                const newPost = {
                    msg: this._state.profilePage.newPostMsg,
                    quantityOfLikes: 0
                }
                this._state.profilePage.postsData.push(newPost);
                this._state.profilePage.newPostMsg = '';
                this._callSubscriber(this._state);
            break;

            case 'UPDATE-NEW-POST-MSG':
                this._state.profilePage.newPostMsg = action.newPostMsg;
                this._callSubscriber(this._state);
            break;
            
            case 'SEND-MSG':
                const newMsg = {
                    msg: this._state.dialogsPage.newMsg
                }
                this._state.dialogsPage.messages.push(newMsg);
                this._state.dialogsPage.newMsg = '';
                this._callSubscriber(this._state);
            break;

            case 'UPDATE-NEW-MSG':
                 this._state.dialogsPage.newMsg = action.newMsg;
                 this._callSubscriber(this._state);
            break;
        }
    }
}


export const creatorAddPostAction = () => ({type: ADD_POST})
export const creatorUpdateNewPostMsgAction = (newPostMsg) => ({type: UPDATE_NEW_POST_MSG,newPostMsg: newPostMsg})
export const creatorUpdateNewMsgAction = (newMsg) => ({type: UPDATE_NEW_MSG,newMsg: newMsg})
export const creatorSendMsgAction = () => ({type: SEND_MSG})

window.state = store.state;

export default store;