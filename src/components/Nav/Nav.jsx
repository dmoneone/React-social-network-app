import React from 'react';
import classes from'./Nav.module.css'
const Nav = () => {
    return (
        <nav className={classes.main_nav}>
            <ul>
            <li>Prfole</li>
            <li>Messages</li>
            <li>News</li>
            <li>Music</li>
            <li>Settings</li>
            </ul>
        </nav>
    );
}

export default Nav;