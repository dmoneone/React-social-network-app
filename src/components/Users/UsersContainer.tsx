import {connect} from 'react-redux';
import {gettingFollow,gettingUnfollow,setCurrentPage,getUsers,UserType} from '../../Redux/UsersReducer';
import { GlobalStateType } from '../../Redux/redux-store'
import React from 'react';
import Users from './Users';
import { getUsersSelector } from '../../Redux/Selectors/selectors';

type MapStateToPropsType = {
    users: Array<UserType>
    usersQuantityOnPage: number
    usersQuantity: number
    currentPage:  number
    isFetching: boolean
    followingInProgress: Array<number>
    isAuth: boolean
    itemsQuantityInPortion: number
}

type MapDispatchToPropType = {
    getUsers: (currentPage: number ,usersQuantityOnPage: number) => void
    setCurrentPage: (c: number) => void
    gettingFollow: (id: number) => void
    gettingUnfollow: (id: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropType

class UsersContainer extends React.Component<PropsType,{}> {
    componentDidMount(){
        this.props.getUsers(this.props.currentPage,this.props.usersQuantityOnPage)
    }
    componentDidUpdate(){
        console.log(this.props)
    }
    loadUsers = (p: number) => {
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



const mapStateToProps = (state: GlobalStateType): MapStateToPropsType => {
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

export default connect<MapStateToPropsType,MapDispatchToPropType,{/* own props */},GlobalStateType>(mapStateToProps,{gettingFollow,gettingUnfollow,setCurrentPage,getUsers})(UsersContainer)

