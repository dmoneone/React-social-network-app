import React from 'react';
import c from './Friend.module.css';

const Friend = props => {
    return (
        <div className={c.item}>
            <div className={c.logo_wrap}>img</div>
            <div className={c.friend_info}>
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default Friend;