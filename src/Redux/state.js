import {renderEntireTree} from '../render';

const state = {
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
}


export const addPost = msg => {
    const newPost = {
        msg: msg,
        quantityOfLikes: 0
    }
    state.profilePage.postsData.push(newPost);
    renderEntireTree(state);
}

export default state;