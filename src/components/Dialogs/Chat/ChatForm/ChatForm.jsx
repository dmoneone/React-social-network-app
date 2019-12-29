import React from 'react';
import c from './ChatForm.module.css';
/*
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
*/
class ChatForm extends React.Component {
    textarea = React.createRef();
    onSendMsg = () => {
        this.props.sendMsg();
    }
    textAreaOnChangeHandler = () => {
        this.props.updateNewMsg(this.textarea.current.value);
    }
    render() {
        return (
            <div>
                <textarea onChange={this.textAreaOnChangeHandler} ref={this.textarea} className={c.textarea} value={this.props.newMsg}></textarea>
                <button onClick={this.onSendMsg}>send</button>
            </div>
        )
    }
}
export default ChatForm;