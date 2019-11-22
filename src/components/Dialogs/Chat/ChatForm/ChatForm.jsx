import React from 'react';
import c from './ChatForm.module.css';
//creatorSendMsgAction
const ChatForm = props => {
    const textarea = React.createRef();
    console.log(props)
    const onSendMsg = () => {
        props.sendMsg();
        //props.dispatch(creatorSendMsgAction());
    }
    const textAreaOnChangeHandler = () => {
        props.updateNewMsg(textarea.current.value);
        //props.dispatch(creatorUpdateNewMsgAction(textarea.current.value));
    }
    return (
        <div>
            <textarea onChange={textAreaOnChangeHandler} ref={textarea} className={c.textarea} value={props.dialogsPage.newMsg}></textarea>
            <button onClick={onSendMsg}>send</button>
        </div>
    )
}

export default ChatForm;