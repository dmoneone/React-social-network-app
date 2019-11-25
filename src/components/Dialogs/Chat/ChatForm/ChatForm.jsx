import React from 'react';
import c from './ChatForm.module.css';
const ChatForm = props => {
    const textarea = React.createRef();
    console.log(props)
    const onSendMsg = () => {
        props.sendMsg();
    }
    const textAreaOnChangeHandler = () => {
        props.updateNewMsg(textarea.current.value);
    }
    return (
        <div>
            <textarea onChange={textAreaOnChangeHandler} ref={textarea} className={c.textarea} value={props.newMsg}></textarea>
            <button onClick={onSendMsg}>send</button>
        </div>
    )
}

export default ChatForm;