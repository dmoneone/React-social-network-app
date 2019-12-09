import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import axios from 'axios'
import {setProfile} from './../../Redux/ProfilePageReducer'
import {withRouter} from 'react-router-dom'

class ProfileGettingAPI extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${!id ?  this.props.authorized : id}`,{
            withCredentials: true
        })
        .then(res=>{
            this.props.setProfile(res.data)
        })
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}



const mapStateToProps = state => ({
    profile: state.profilePage.currentProfile,
    authorized: state.auth.id
})

const withUrlContainerProfile = withRouter(ProfileGettingAPI)

const ProfileContainer = connect(mapStateToProps,{setProfile})(withUrlContainerProfile)
export default ProfileContainer