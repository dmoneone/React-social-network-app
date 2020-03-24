import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {logout} from '../../Redux/AuthReducer'
import { GlobalStateType } from '../../Redux/redux-store'

type MapStateProps = {
    isAuth: boolean
    login: string
}

type MapDispatchProps = {
    logout: () => void
}

type Props = MapStateProps & MapDispatchProps

class HeaderGettingAPI extends React.Component<Props, {}>{
    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: GlobalStateType): MapStateProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login as string 
})
const HeaderContainer = connect<MapStateProps,MapDispatchProps,{},GlobalStateType>(mapStateToProps,{logout})(HeaderGettingAPI)

export default HeaderContainer