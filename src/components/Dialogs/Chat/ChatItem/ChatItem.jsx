import React from 'react';
import MessageItem from './Messages/MessageItem';

const ChatItem = props => {
    console.log("chatItem")
    const messagesJSX = props.messages.map(item => <MessageItem msg={item.msg}/>)
    return (
        <div>
            {messagesJSX}
        </div>
    )
}

export default ChatItem;