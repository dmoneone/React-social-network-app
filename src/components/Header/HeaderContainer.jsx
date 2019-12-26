import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {getAuth} from '../../Redux/AuthReducer'
import API from '../../API/api'

class HeaderGettingAPI extends React.Component{
    componentDidMount() {
        this.props.getAuth()
    }
    componentDidUpdate() {
        if(localStorage.getItem('auth') == undefined) {
            localStorage.setItem('auth', JSON.stringify(this.props.authData));
        }
    }
    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = state => ({
    authData: state.auth
})
const HeaderContainer = connect(mapStateToProps,{getAuth})(HeaderGettingAPI)

export default HeaderContainer