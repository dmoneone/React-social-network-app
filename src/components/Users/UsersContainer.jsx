import {connect} from 'react-redux';
import {gettingFollow,gettingUnfollow,setCurrentPage,getUsers} from './../../Redux/UsersReducer';

import React from 'react';
import Users from './Users';
import Preloader from '../../common/Preloader';



class UsersGettingAPI extends React.Component {
    componentDidMount(){
        this.props.getUsers(this.props.currentPage,this.props.usersQuantityOnPage)
    }
    componentDidUpdate(){
        //alert('update')
   
    }
    loadUsers = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsers(p,this.props.usersQuantityOnPage)

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
                        unfollow={this.props.gettingUnfollow}
                        follow={this.props.gettingFollow}
                        usersQuantity={this.props.usersQuantity}
                        usersQuantityOnPage={this.props.usersQuantityOnPage}
                        followingInProgress={this.props.followingInProgress}
                        isAuth={this.props.isAuth}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth
})

/*const mapDispatchToProps = dispatch => ({
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
    setCurrentPage: (p) => {
        dispatch(setCurrentPage(p))
    }
})*/

const UsersContainer = connect(mapStateToProps,{gettingFollow,gettingUnfollow,setCurrentPage,getUsers})(UsersGettingAPI)

export default UsersContainer;