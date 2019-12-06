import React from 'react';
import c from './MessageItem.module.css'

const MessageItem = props => {
    return (
        <div className={c.msg}>{props.msg}</div>
    )
}

export default MessageItem;