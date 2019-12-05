import React from 'react';
import c from './Header.module.css'
import {NavLink} from 'react-router-dom'
const Header = (props) => {
    return (
        <header className="header">
            <div className={c.logo_wrap}>
                <img src="img/square-facebook-128.png"/>
            </div>
            <div>
                {
                    props.authData.isAuth ? 
                        <NavLink to={'/profile/' + props.authData.id} className={c.authorized}>
                            <span>You are authorized</span>
                            <span>{props.authData.login}</span>
                        </NavLink>
                        :
                        <NavLink className={c.login} to="/login">Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;