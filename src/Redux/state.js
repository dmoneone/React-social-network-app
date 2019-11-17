
const store = {
    _state: {
        dialogsPage : {
            dialogData : [
                {name: 'Kurash', id: 1},
                {name: 'Salo', id: 2},
                {name: 'Kate', id: 3}
            ],
            messagesData : [
                {msg: "Dash pisky ebat?"},
                {msg: "228"},
                {msg: "ass"}
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
        }
    }
}

window.state = store.state;

export default store;