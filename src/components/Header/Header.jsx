import React from 'react';
import classes from './Header.module.css'
const Header = () => {
    return (
        <header className="header">
            <div className={classes.logo_wrap}>
            <img src="img/square-facebook-128.png"/>
            </div>
        </header>
    );
}

export default Header;