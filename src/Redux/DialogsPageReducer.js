
const SEND_MSG = 'SEND-MSG';


export const creatorSendMsgAction = (newMsg) => ({type: SEND_MSG,newMsg})

const initialState = {
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
            messages: [...state.messages,{msg: action.newMsg}]
        }

        default: return state;
    }
}

export default dialogsPageReducer;