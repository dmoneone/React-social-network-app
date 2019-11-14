import React from 'react';
import c from './Friends.module.css';
import Friend from './FriendItem/Friend';

const Friends = props => {
    const friends = props.friends.map(item => (<Friend name={item.name} key={item.name}/>));
    return (
        <div className={c.list}>
            <span>Friends</span>
            { friends }
        </div>
    )
}

export default Friends;