import React from 'react'
import c from './Users.module.css'
import Paginator from './Paginator'
import User from './User'

const Users = props => {
    const followUser = id => {
        props.follow(id)
    }
    const unfollowUser = id => {
        props.unfollow(id)
    }
    return (
        <div className={c.wrap}>
                <Paginator 
                    usersQuantity={props.usersQuantity} 
                    usersQuantityOnPage={props.usersQuantityOnPage}
                    currentPage={props.currentPage} 
                    loadUsers={props.loadUsers}
                />
                {
                   props.users.map(item => {
                       return (
                           <User 
                                item={item}
                                followingInProgress={props.followingInProgress}
                                unfollowUser={unfollowUser}
                                followUser={followUser}
                                isAuth={props.isAuth}
                                key={item.id}
                           />
                       )
                   })
                   
                }
            </div>
    )
}

export default Users