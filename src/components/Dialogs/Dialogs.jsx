import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialogs/Dialog';
import Message from './Messages/Message';

const dialogData = [
    {name: 'Kurash', id: 1},
    {name: 'Salo', id: 2},
    {name: 'Kate', id: 3}
];

const MessagesData = [
    {msg: "Dash pisky ebat?"},
    {msg: "228"},
    {msg: "ass"}
];

const dialogJSXData = dialogData.map(item => (<Dialog name={item.name} id={item.id} />));
const messagesJSXData = MessagesData.map(item => (<Message msg={item.msg} />));


const Dialogs = props => {
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