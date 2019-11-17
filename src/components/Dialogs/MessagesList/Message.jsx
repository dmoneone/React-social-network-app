import React from 'react';
import c from './Message.module.css';


const Message = props => {
    return (
        <div className={c.item}>
            <span>{props.msg}</span>
        </div>
    )
}

export default Message;