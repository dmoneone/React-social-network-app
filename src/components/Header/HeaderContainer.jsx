import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {logout} from '../../Redux/AuthReducer'
import API from '../../API/api'

class HeaderGettingAPI extends React.Component{
    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = state => ({
    authData: state.auth
})
const HeaderContainer = connect(mapStateToProps,{logout})(HeaderGettingAPI)

export default HeaderContainer