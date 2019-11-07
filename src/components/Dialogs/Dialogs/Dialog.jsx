import React from 'react';
import c from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

const Dialog = props => {
    const path = "/messages/1" + props.id;
    return (
        <div className={c.item}>
            <NavLink activeClassName={c.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;