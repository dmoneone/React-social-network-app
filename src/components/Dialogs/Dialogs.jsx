import React from 'react';
import classes from './Dialogs.module.css';
import ChatItemLink from './ChatList/ChatItemLink';
import Message from './MessagesList/Message';
import Chat from './Chat/Chat';


const Dialogs = props => {
    const messagesJSXData = props.messagesList.map(item => (<Message msg={item.msg} key={item.msg} />));
    const chatListJSXData = props.chatList.map(item => (<ChatItemLink name={item.name} id={item.id} key={item.id} />));
    return (
        <content className={classes.content}>
            <div className={classes.contact_list}>
                { chatListJSXData }
            </div>
            <div className={classes.messages_list}>
                { messagesJSXData }
            </div>
            <div className={classes.chat_wrap}>
                <Chat />
            </div>
        </content>
    )
}

export default Dialogs;