import React from 'react';
import c from './Header.module.css'
import {NavLink} from 'react-router-dom'
const Header = (props) => {
    return (
        <header className="header">
            <div className={c.logo_wrap}>
                <a href="https://uk.reactjs.org/">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-128.png"/>
                </a>
            </div>
            <div>
                {
                    props.authData.isAuth ? 
                        <NavLink to={'/profile/' + props.authData.id} className={c.authorized}>
                            <span>You are authorized:</span>
                            <span className={c.name}>{props.authData.login}</span>
                        </NavLink>
                        :
                        <NavLink className={c.login} to="/login">Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;