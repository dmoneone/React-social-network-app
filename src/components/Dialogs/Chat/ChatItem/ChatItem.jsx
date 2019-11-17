import React from 'react';
import MessageItem from './Messages/MessageItem';

const ChatItem = props => {
    const messagesJSX = props.dialogsPage.messages.map(item => <MessageItem msg={item.msg}/>)
    return (
        <div>
            {messagesJSX}
        </div>
    )
}

export default ChatItem;