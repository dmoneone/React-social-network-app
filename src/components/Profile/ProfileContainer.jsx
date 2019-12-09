import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import axios from 'axios'
import {setProfile} from './../../Redux/ProfilePageReducer'
import {withRouter} from 'react-router-dom'
import API from '../../API/api'

class ProfileGettingAPI extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.userId
        API
          .getUserProfile(id,this.props.authorized)
          .then(data => {
            this.props.setProfile(data)
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