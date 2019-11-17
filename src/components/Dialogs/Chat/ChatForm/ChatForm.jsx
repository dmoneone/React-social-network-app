import React from 'react';
import c from './ChatForm.module.css';
import {creatorUpdateNewMsgAction,creatorSendMsgAction} from '../../../../Redux/state';

const ChatForm = props => {
    const textarea = React.createRef();
    console.log(props)
    const sendMsg = () => {
        props.dispatch(creatorSendMsgAction());
    }
    const textAreaOnChangeHandler = () => {
        props.dispatch(creatorUpdateNewMsgAction(textarea.current.value));
    }
    return (
        <div>
            <textarea onChange={textAreaOnChangeHandler} ref={textarea} className={c.textarea} value={props.dialogsPage.newMsg}></textarea>
            <button onClick={sendMsg}>send</button>
        </div>
    )
}

export default ChatForm;