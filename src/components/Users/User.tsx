import React from 'react'
import c from './Users.module.css'
import {NavLink} from 'react-router-dom'
import profilePhotoUndefined from "./../../assets/img/14-1User_1-128.png"
import { UserType } from '../../Redux/UsersReducer'

type PropsType = {
    item: UserType
    followingInProgress: Array<number>
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
    isAuth: boolean
}

const User: React.FC<PropsType> = props => {
    const {item,followingInProgress,unfollowUser,followUser,isAuth} = props
    return (
        <div key={item.id} className={c.user}>
            <div className={c.img_wrap}>
                <NavLink to={'profile/' + item.id}>
                    <img src={item.photos.small !== null ? item.photos.small : profilePhotoUndefined} alt=""/>
                </NavLink>
            </div>
        <div className={c.bio_wrap}>
            <span className={c.name}>{item.name}</span>
            <span className={c.status}>{item.status}</span>
            {   
                isAuth ?
                item.followed ? 
                    <button disabled={followingInProgress.some((id: number) => id === item.id)} className={c.btn} onClick={() => unfollowUser(item.id)}>Unfollow</button> : 
                    <button disabled={followingInProgress.some((id: number) => id === item.id)} className={c.btn} onClick={() => followUser(item.id)}>follow</button>
                : null
            }
            </div>                  
        </div>
    )
}

export default User