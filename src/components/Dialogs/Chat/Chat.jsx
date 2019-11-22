import React from 'react';
import c from './Chat.module.css';
import ChatForm from './ChatForm/ChatForm';
import ChatItem from './ChatItem/ChatItem';
import ChatFormContainer from './ChatForm/ChatFormContainer';
const Chat = props => {
    return (
        <div className={c.chat_wrap}>
            <div className={c.chat}>
                <ChatItem dialogsPage={props.dialogsPage}/>
            </div>
            <div className={c.form}>
                <ChatFormContainer dispatch={props.dispatch} dialogsPage={props.dialogsPage} />
            </div>
        </div>
    )
}

export default Chat;