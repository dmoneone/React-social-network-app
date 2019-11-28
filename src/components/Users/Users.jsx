import React from 'react';
import axios from 'axios';
import profilePhotoUndefined from "./../../assets/img/profile_photo_undefined.png"



class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res=>props.setUsers(res.data.items))
    }
    render() {
        return (
            <div>
                {
                   this.props.users.map(item => {
                       return (
                           <div key={item.id}>
                               <img src={item.photos.small !== null ? item.photos.small : profilePhotoUndefined} alt=""/>
                               <span>{item.name}</span>
                               <span>{item.status}</span>
                               {
                                    item.follow ? 
                                        <button onClick={() => this.props.unfollow(item.id)}>Follow</button> : 
                                        <button onClick={() => this.props.follow(item.id)}>Unfollow</button>
                                }
                           </div>
                          
                       )
                   })
                   
                }
            </div>
        )
    }
}

export default Users;
