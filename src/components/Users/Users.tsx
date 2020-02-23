import React from 'react'
import c from './Users.module.css'
import Paginator from './Paginator'
import User from './User'
import Preloader from '../../common/Preloader'
import { UserType } from '../../Redux/UsersReducer'

type PropsType = {
    itemsQuantityInPortion: number
    currentPage: number
    loadUsers: (p: number) => void
    users: Array<UserType>
    unfollow: (id: number) => void
    follow: (Id: number) => void
    usersQuantity: number
    usersQuantityOnPage: number
    followingInProgress: Array<number>
    isAuth: boolean
    isFetching: boolean
}

const Users: React.FC<PropsType> = props => {
    const followUser = (id: number) => {
        props.follow(id)
    }
    const unfollowUser = (id: number) => {
        props.unfollow(id)
    }
    return (
        <div className={c.wrap}>
                <Paginator 
                    usersQuantity={props.usersQuantity} 
                    usersQuantityOnPage={props.usersQuantityOnPage}
                    currentPage={props.currentPage} 
                    loadUsers={props.loadUsers}
                    itemsQuantityInPortion={props.itemsQuantityInPortion}
                />
                {
                   props.isFetching ? 
                   <Preloader/> : 
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