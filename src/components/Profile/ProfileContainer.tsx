import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getProfile,getStatus,setStatus,updatePhoto, ProfileType} from '../../Redux/ProfilePageReducer'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import {withAuthRedirect} from '../../HOCS/withAuthRedirect'
import { compose } from 'redux'
import { getAuthorizedUserIdFormState, getIsAuthFromState, getProfileSelector } from '../../Redux/Selectors/selectors'
import { GlobalStateType } from '../../Redux/redux-store'

type MapStateProps = {
    profile: ProfileType | null
    authorized: number | null
    isAuth: boolean
}

type MapDispatchProps = {
    getProfile: (id: string | undefined, authorized: number | null) => void
    getStatus: (id: string | undefined, authorized: number | null) => void
    updatePhoto: (photo: any) => void
}

interface HomeRouterProps {
    userId?: string; 
}

type Props = MapStateProps & MapDispatchProps & RouteComponentProps<HomeRouterProps>

class ProfileGettingAPI extends React.Component<Props, {}> {
    id: string | undefined = undefined
    componentDidMount() {
        const authorized = this.props.authorized
        this.id = this.props.match.params.userId
        this.toLoadProfileInfo(this.id,authorized)   
    }
    toLoadProfileInfo(id: string | undefined, authorized: number | null) {
            this.props.getProfile(id,authorized)
            this.props.getStatus(id,authorized)
    }
    isOwner(id1: number | null, id2: string | undefined) {
        if(id1 && id2 == undefined) {
            return true
        }
        else if(id1 && id2 != undefined && id1 == +id2) {
            return true
        }
        else {
            return false
        }
    }
    render() {
        return (
            <Profile {...this.props} 
                profile={this.props.profile as ProfileType}
                isOwner={this.isOwner(this.props.authorized, this.id)}
                updatePhoto={this.props.updatePhoto}
            />
        )
    }
}



const mapStateToProps = (state: GlobalStateType): MapStateProps => {
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
    connect(mapStateToProps,{getProfile,getStatus,updatePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileGettingAPI)