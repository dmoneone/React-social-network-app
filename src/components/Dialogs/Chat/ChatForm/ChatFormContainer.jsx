import React from 'react';
import {creatorUpdateNewMsgAction,creatorSendMsgAction} from '../../../../Redux/DialogsPageReducer';
import ChatForm from './ChatForm';
//creatorSendMsgAction
const ChatFormContainer = props => {
    const sendMsg = () => {
        props.dispatch(creatorSendMsgAction());
    }
    const updateNewMsg = (txt) => {
        props.dispatch(creatorUpdateNewMsgAction(txt));
    }
    return (
        <ChatForm sendMsg={sendMsg} updateNewMsg={updateNewMsg} dialogsPage={props.dialogsPage}/>
    )
}

export default ChatFormContainer;