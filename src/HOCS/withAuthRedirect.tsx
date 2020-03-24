import React, { ComponentType } from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux';
import { GlobalStateType } from '../Redux/redux-store';

const mapStateToProps = (state: GlobalStateType) => ({
    isAuth: state.auth.isAuth
})

type Props = {
    isAuth: boolean
}

export const withAuthRedirect = (Component: ComponentType) => {
    class RedirectComponent extends React.Component<Props, {}> {
        render() {
            if(!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
}