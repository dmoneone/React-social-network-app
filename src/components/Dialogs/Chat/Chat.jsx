import React from 'react';
import c from './Chat.module.css';
import ChatFormContainer from './ChatForm/ChatFormContainer';
import ChatItemContainer from './ChatItem/ChatItemContainer';
const Chat = props => {
    return (
        <div className={c.chat_wrap}>
            <div className={c.chat}>
                <ChatItemContainer />
            </div>
            <div className={c.form}>
                <ChatFormContainer />
            </div>
        </div>
    )
}

export default Chat;