import {connect} from 'react-redux';
import {setFetchingAC,followAC,unfollowAC,setUsercAC,setPagesQuantityAC,setCurrentPageAC,setUsersQunatityAC} from './../../Redux/UsersReducer';

import React from 'react';
import axios from 'axios';
import Users from './Users';
import Preloader from '../../common/Preloader';



class UsersGettingAPI extends React.Component {
    componentDidMount(){
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersQuantityOnPage}`)
            .then(res => {
                this.props.setFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setUsersQuantity(res.data.totalCount)
                const q = Math.ceil(this.props.usersQuantity / this.props.usersQuantityOnPage);
                this.props.setQuantityOfPages(q);
            })
    }
    componentDidUpdate(){
        //alert('update')
   
    }
    loadUsers = (p) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersQuantityOnPage}`)
        .then(res=>{
            this.props.setFetching(false)
            this.props.setUsers(res.data.items)
        })

    }

    render() {
        return (
            <>
                {
                    this.props.isFetching ? 
                    <Preloader/> : 
                    <Users
                        pagesQuantity={this.props.pagesQuantity}
                        currentPage={this.props.currentPage}
                        loadUsers={this.loadUsers}
                        users={this.props.users}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        
                    />
                }   
            </>
        )
    }
}




const mapStateToProps = state => ({
    users: state.usersPage.users,
    usersQuantityOnPage: state.usersPage.usersQuantityOnPage,
    usersQuantity: state.usersPage.usersQuantity,
    currentPage:  state.usersPage.currentPage,
    pagesQuantity: state.usersPage.pagesQuantity,
    isFetching: state.usersPage.isFetching
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
    },
    setFetching: (bool) => {
        dispatch(setFetchingAC(bool))
    }
})

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersGettingAPI)

export default UsersContainer;