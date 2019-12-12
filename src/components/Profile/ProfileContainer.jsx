import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getProfile} from './../../Redux/ProfilePageReducer'
import {withRouter} from 'react-router-dom'

class ProfileGettingAPI extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.userId
        this.props.getProfile(id,this.props.authorized)
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

const ProfileContainer = connect(mapStateToProps,{getProfile})(withUrlContainerProfile)
export default ProfileContainer