import React from 'react';
import axios from 'axios';
import profilePhotoUndefined from "./../../assets/img/14-1User_1-128.png"
import c from './Users.module.css';



class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersQuantityOnPage}`)
            .then(res => {
                console.log(res.data)
                this.props.setUsers(res.data.items)
                this.props.setUsersQuantity(res.data.totalCount)
            })
    }
    componentDidUpdate(){
        //alert('update')
    }
    loadUsers(p) {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersQuantityOnPage}`)
            .then(res=>this.props.setUsers(res.data.items))

    }
    render() {
        const pages = [];
        const q = Math.ceil(this.props.usersQuantity / this.props.usersQuantityOnPage);
        this.props.setQuantityOfPages(q);
        for (let i = 1; i <= q; i++) {
            pages.push(i);
        }
        return (
            <div>
                <ul className={c.pages}>
                    {   
                        pages.map(p => {
                            return (
                                <li key={p} onClick={e => this.loadUsers(p)} className={p === this.props.currentPage ? c.selected : null}>{p}</li>
                            )
                        })
                    }
                </ul>
                {
                   this.props.users.map(item => {
                       return (
                           <div key={item.id} className={c.user}>
                               <div className={c.img_wrap}>
                                    <img src={item.photos.small !== null ? item.photos.small : profilePhotoUndefined} alt=""/>
                               </div>
                               <div className={c.bio_wrap}>
                                    <span className={c.name}>{item.name}</span>
                                    <span className={c.status}>{item.status}</span>
                                    {
                                        item.follow ? 
                                            <button className={c.btn} onClick={() => this.props.unfollow(item.id)}>Unfollow</button> : 
                                            <button className={c.btn} onClick={() => this.props.follow(item.id)}>follow</button>
                                    }
                                </div>
                           </div>
                          
                       )
                   })
                   
                }
            </div>
        )
    }
}

export default Users;
