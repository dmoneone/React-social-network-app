const UPDATE_NEW_MSG = 'UPDATE-NEW-MSG';
const SEND_MSG = 'SEND-MSG';

export const creatorUpdateNewMsgAction = (newMsg) => ({type: UPDATE_NEW_MSG,newMsg: newMsg})
export const creatorSendMsgAction = () => ({type: SEND_MSG})

const initialState = {
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
}

const dialogsPageReducer = (state = initialState,action) => {
    switch(action.type){
        case 'SEND-MSG':
            const newMsg = {
                msg: state.newMsg
            }
            state.messages.push(newMsg);
            state.newMsg = '';
        return state;

        case 'UPDATE-NEW-MSG':
            state.newMsg = action.newMsg;
        return state;
        default: return state;
    }
}

export default dialogsPageReducer;