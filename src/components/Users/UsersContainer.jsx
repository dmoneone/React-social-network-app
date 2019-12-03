import {connect} from 'react-redux';
import {followAC,unfollowAC,setUsercAC,setPagesQuantityAC,setCurrentPageAC,setUsersQunatityAC} from './../../Redux/UsersReducer';

import React from 'react';
import axios from 'axios';
import Users from './Users';



class UsersGettingAPI extends React.Component {
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersQuantityOnPage}`)
            .then(res => {
                console.log(res.data)
                this.props.setUsers(res.data.items)
                this.props.setUsersQuantity(res.data.totalCount)
                const q = Math.ceil(this.props.usersQuantity / this.props.usersQuantityOnPage);
                this.props.setQuantityOfPages(q);
            })
            console.log(this.props)
    }
    componentDidUpdate(){
        //alert('update')
   
    }
    loadUsers = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersQuantityOnPage}`)
        .then(res=>this.props.setUsers(res.data.items))

    }

    render() {
        return (
            <Users
                pagesQuantity={this.props.pagesQuantity}
                currentPage={this.props.currentPage}
                loadUsers={this.loadUsers}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                
            />
        )
    }
}




const mapStateToProps = state => ({
    users: state.usersPage.users,
    usersQuantityOnPage: state.usersPage.usersQuantityOnPage,
    usersQuantity: state.usersPage.usersQuantity,
    currentPage:  state.usersPage.currentPage,
    pagesQuantity: state.usersPage.pagesQuantity
})

const mapDispatchToProps = dispatch => ({
    follow: (userId) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
        dispatch(setUsercAC(users))
    },
    setQuantityOfPages: (q) => {
        dispatch(setPagesQuantityAC(q))
    },
    setCurrentPage: (c) => {
        dispatch(setCurrentPageAC(c))
    },
    setUsersQuantity: (q) => {
        dispatch(setUsersQunatityAC(q))
    }
})

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersGettingAPI)

export default UsersContainer;