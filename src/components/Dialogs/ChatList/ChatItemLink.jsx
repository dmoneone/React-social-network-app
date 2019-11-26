import React from 'react';
import c from './ChatItemLink.module.css';
import {NavLink} from 'react-router-dom';

const ChatItemLink = props => {
    const path = "/messages/" + props.id;
    return (
        <div className={c.item}>
            <NavLink activeClassName={c.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default ChatItemLink;