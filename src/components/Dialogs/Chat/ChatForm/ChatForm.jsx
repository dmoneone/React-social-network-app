import React from 'react';
import c from './ChatForm.module.css';
import { Field,reduxForm } from 'redux-form';

const ChatForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='msg' className={c.textarea}/>
            <button>Send</button>
        </form>
    )
}

const ChatReduxForm = reduxForm({
    // a unique name for the form
    form: 'chat-form'
  })(ChatForm)

class ChatFormWrap extends React.Component {
    
    submit = data => {
        this.props.sendMsg(data.msg);
    }
    render() {
        return (
            <ChatReduxForm onSubmit={this.submit}/>
        )
    }
}
export default ChatFormWrap;