import dialogsPageReducer from './DialogsPageReducer'
import profilePageReducer from './ProfilePageReducer'

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
                {msg: "ggggg"},
                {msg: "228"},
                {msg: "ass"}
            ],
            messages : [

            ]
        },
        profilePage : {
            newPostMsg : 'Input anything',
            postsData : [
                {msg: "jggggggopa", quantityOfLikes: 10},
                {msg: "ggggg", quantityOfLikes: 100},
                {msg: "mmmm", quantityOfLikes: 100},
                {msg: "hhhh", quantityOfLikes: 100}
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
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage,action);
        this._state.profilePage = profilePageReducer(this._state.profilePage,action);
        this._callSubscriber(this._state);
    }
}



window.state = store.state;

export default store;