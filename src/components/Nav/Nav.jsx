import React from 'react';
import classes from'./Nav.module.css'
import {NavLink} from 'react-router-dom';
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul className={classes.nav}>
                <li className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Prfile</NavLink></li>
                <li className={classes.item}><NavLink to="/messages" activeClassName={classes.active}>Messages</NavLink></li>
                <li className={classes.item}><NavLink to="/news" activeClassName={classes.active}>News</NavLink></li>
                <li className={classes.item}>Music</li>
                <li className={classes.item}>Settings</li>
            </ul>
        </nav>
    );
}

export default Nav;