import React from 'react';
import classes from './Dialogs.module.css';
import ChatItem from './ChatList/ChatItem';
import Message from './MessagesList/Message';
import Chat from './Chat/Chat';


const Dialogs = props => {
    const messagesJSXData = props.dialogsPage.messagesList.map(item => (<Message msg={item.msg} />));
    const chatListJSXData = props.dialogsPage.chatList.map(item => (<ChatItem name={item.name} id={item.id} />));
    return (
        <content className={classes.content}>
            <div className={classes.contact_list}>
                { chatListJSXData }
            </div>
            <div className={classes.messages_list}>
                { messagesJSXData }
            </div>
            <div className={classes.chat_wrap}>
                <Chat dialogsPage={props.dialogsPage} dispatch={props.dispatch}/>
            </div>
        </content>
    )
}

export default Dialogs;