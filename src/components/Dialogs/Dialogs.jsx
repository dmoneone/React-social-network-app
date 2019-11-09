import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './DialogItems/Dialog';
import Message from './Messages/Message';





const Dialogs = props => {
    const messagesJSXData = props.messagesData.map(item => (<Message msg={item.msg} key={item.msg} />));
    const dialogJSXData = props.dialogData.map(item => (<Dialog name={item.name} id={item.id} key={item.id}/>));
    return (
        <content className={classes.content}>
            <div className={classes.contact_list}>
                { dialogJSXData }
            </div>
            <div className={classes.messages}>
                { messagesJSXData }
            </div>
        </content>
    )
}

export default Dialogs;