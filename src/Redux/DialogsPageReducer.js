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
        {msg: 228}
    ]
}

const dialogsPageReducer = (state = initialState,action) => {
    switch(action.type){
        case 'SEND-MSG':
        return {
            ...state,
            newMsg: '',
            messages: [...state.messages,{msg: state.newMsg}]
        }

        case 'UPDATE-NEW-MSG':
        return {
            ...state,
            newMsg: action.newMsg
        }
        default: return state;
    }
}

export default dialogsPageReducer;