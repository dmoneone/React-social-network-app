import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';
const Dialogs = props => {
    return (
        <content className={classes.content}>
            <div className={classes.contact_list}>
                <ul>
                    <li><NavLink activeClassName={classes.active} to="/messages/1">Sergay</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/messages/2">Sergay</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/messages/3">Sergay</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/messages/4">Sergay</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/messages/5">Sergay</NavLink></li>
                </ul>
            </div>
            <div className={classes.messages}>
                <ul>
                    <li className={classes.message}>
                        <div>hi</div>
                    </li>
                    <li className={classes.message}>
                        <div>what are u doing?</div>
                    </li>
                    <li className={classes.message}>
                        <div>emmm</div>
                    </li>
                    <li className={classes.message}>
                        <div>HTML is language!</div>
                    </li>
                    <li className={classes.message}>
                        <div>Fuck</div>
                    </li>
                </ul>
            </div>
        </content>
    )
}

export default Dialogs;