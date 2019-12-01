import {connect} from 'react-redux';
import Users from './Users';
import {followAC,unfollowAC,setUsercAC,setPagesQuantityAC,setCurrentPageAC,setUsersQunatityAC} from './../../Redux/UsersReducer';
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

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer;