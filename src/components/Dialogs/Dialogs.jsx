import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './DialogItems/Dialog';
import Message from './Messages/Message';
import Chat from './Chat/Chat';





const Dialogs = props => {
    const messagesJSXData = props.dialogsPage.messagesData.map(item => (<Message msg={item.msg} />));
    const dialogJSXData = props.dialogsPage.dialogData.map(item => (<Dialog name={item.name} id={item.id} />));
    return (
        <content className={classes.content}>
            <div className={classes.contact_list}>
                { dialogJSXData }
            </div>
            <div className={classes.messages_list}>
                { messagesJSXData }
            </div>
            <div className={classes.chat_wrap}>
                <Chat/>
            </div>
        </content>
    )
}

export default Dialogs;