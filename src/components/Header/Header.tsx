import React, { FC } from 'react';
import c from './Header.module.css'
import {NavLink} from 'react-router-dom'

type Props = {
    isAuth: boolean
    login: string
    logout: () => void
}

const Header: FC<Props> = (props) => {
    return (
        <header className="header">
            <div className={c.logo_wrap}>
                <a href="https://uk.reactjs.org/">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-128.png"/>
                </a>
            </div>
            <div>
                {
                    props.isAuth ? 
                        <NavLink to={'/profile'} className={c.authorized}>
                            <span>You are authorized:</span>
                            <span className={c.name}>{props.login}</span>
                            <button onClick={() => props.logout() }>Log Out</button>
                        </NavLink>
                        :
                        <NavLink className={c.login} to="/login">Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;