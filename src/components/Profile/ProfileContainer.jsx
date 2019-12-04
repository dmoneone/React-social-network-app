import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import axios from 'axios'
import {setProfile} from './../../Redux/ProfilePageReducer'

class ProfileGettingAPI extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${5343}`)
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
    profile: state.profilePage.currentProfile
})

const ProfileContainer = connect(mapStateToProps,{setProfile})(ProfileGettingAPI)
export default ProfileContainer