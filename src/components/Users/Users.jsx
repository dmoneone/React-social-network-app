import React from 'react'
import profilePhotoUndefined from "./../../assets/img/14-1User_1-128.png"
import c from './Users.module.css'
import {NavLink} from 'react-router-dom'
import axios from  'axios'

const Users = props => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(props.usersQuantity / props.usersQuantityOnPage); i++) {
        pages.push(i);
    }


    const followUser = id => {
        axios.post('https://social-network.samuraijs.com/api/1.0/follow/'+id,null,{
            withCredentials: true,
            headers: {
                'API-KEY': 'cacb93f0-c6bd-40cd-9b85-22a8768dd33f'
            }
        }).then(res => {
            if(res.data.resultCode === 0) {
                props.follow(id)
            }
        })
        
    }

    const unfollowUser = id => {
        axios.delete('https://social-network.samuraijs.com/api/1.0/follow/'+id,{
            withCredentials: true,
            headers: {
                'API-KEY': 'cacb93f0-c6bd-40cd-9b85-22a8768dd33f'
            }
        }).then(res => {
            if(res.data.resultCode === 0) {
                props.unfollow(id)
            }
        })
    }
    
    return (
        <div className={c.wrap}>
                <ul className={c.pages}>
                    {   
                        pages.map(p => {
                            return (
                                <li key={p} onClick={e => props.loadUsers(p)} className={p === props.currentPage ? c.selected : null}>{p}</li>
                            )
                        })
                    }
                </ul>
                {
                   props.users.map(item => {
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
                                        item.followed ? 
                                            <button className={c.btn} onClick={() => unfollowUser(item.id)}>Unfollow</button> : 
                                            <button className={c.btn} onClick={() => followUser(item.id)}>follow</button>
                                    }
                                </div>
                                
                           </div>
                          
                       )
                   })
                   
                }
            </div>
    )
}

export default Users