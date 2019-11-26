import {connect} from 'react-redux';
import Users from './Users';
import {followAC,unfollowAC,setUsercAC} from './../../Redux/UsersReducer';
const mapStateToProps = state => ({
    users: state.usersPage.users
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
    }
})

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer;