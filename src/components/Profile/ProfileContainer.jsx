import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getProfile,getStatus,setStatus} from './../../Redux/ProfilePageReducer'
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../../HOCS/withAuthRedirect'
import { compose } from 'redux'
import { getProfileFromState, getAuthorizedUserIdFormState, getIsAuthFromState, getProfileSelector } from './../../Redux/Selectors/selectors'

class ProfileGettingAPI extends React.Component {
    componentDidMount() {
        const authorized = this.props.authorized
        const id = this.props.match.params.userId
        this.toLoadProfileInfo(id,authorized)

        
    }
    toLoadProfileInfo(id,authorized) {
            this.props.getProfile(id,authorized)
            this.props.getStatus(id,authorized)
    }
    toAllowNotReadOnly(id1,id2) {
        if(id1 && id2 === undefined) {
            return true
        }
        else if(+id1 === +id2) {
            return true
        }
        else {
            return false
        }
    }
    render() {
    
        return (
            <Profile {...this.props} profile={this.props.profile} notReadOnly={this.toAllowNotReadOnly(this.props.authorized,this.props.match.params.userId)}/>
        )
    }
}



const mapStateToProps = state => {

    return {
        profile: getProfileSelector(state),
        authorized: getAuthorizedUserIdFormState(state),
        isAuth: getIsAuthFromState(state)
    }
}



/*
const withUrlContainerProfile = withRouter(withAuthRedirect(ProfileGettingAPI))

const ProfileContainer = connect(mapStateToProps,{getProfile})(withUrlContainerProfile)
export default ProfileContainer
*/

export default compose(
    connect(mapStateToProps,{getProfile,getStatus}),
    withRouter,
    withAuthRedirect
)(ProfileGettingAPI)