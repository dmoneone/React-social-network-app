import React from 'react'
import c from './Users.module.css'

const Paginator = props => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(props.usersQuantity / props.usersQuantityOnPage); i++) {
        pages.push(i);
    }
    return (
        <ul className={c.pages}>
            {   
                pages.map(p => {
                    return (
                        <li key={p} onClick={e => props.loadUsers(p)} className={p === props.currentPage ? c.selected : null}>{p}</li>
                    )
                })
            }
        </ul>
    )
}

export default Paginator