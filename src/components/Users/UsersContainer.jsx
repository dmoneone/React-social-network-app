import {connect} from 'react-redux';
import {gettingFollow,gettingUnfollow,setCurrentPage,getUsers} from './../../Redux/UsersReducer';

import React from 'react';
import Users from './Users';
import { getUsersSelector } from '../../Redux/Selectors/selectors';



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
             <Users
                itemsQuantityInPortion={this.props.itemsQuantityInPortion}
                currentPage={this.props.currentPage}
                loadUsers={this.loadUsers}
                users={this.props.users}
                unfollow={this.props.gettingUnfollow}
                follow={this.props.gettingFollow}
                usersQuantity={this.props.usersQuantity}
                usersQuantityOnPage={this.props.usersQuantityOnPage}
                followingInProgress={this.props.followingInProgress}
                isAuth={this.props.isAuth}
                isFetching={this.props.isFetching}
            />
        )
    }
}



const mapStateToProps = state => {
 
    return {
        users: getUsersSelector(state),
        usersQuantityOnPage: state.usersPage.usersQuantityOnPage,
        usersQuantity: state.usersPage.usersQuantity,
        currentPage:  state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
        itemsQuantityInPortion: state.usersPage.itemsQuantityInPortion
    }
}

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