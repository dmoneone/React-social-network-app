import React from 'react';
import classes from'./Nav.module.css'
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul className={classes.nav}>
                <li><a href="/profile">Prfile</a></li>
                <li><a href="/messages">Messages</a></li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </nav>
    );
}

export default Nav;