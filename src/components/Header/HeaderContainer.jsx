import React from 'react'
import Header from './Header'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUserAuth} from '../../Redux/AuthReducer'

class HeaderGettingAPI extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true})
        .then(res=>{
            console.log(res.data.data)
            this.props.setUserAuth(res.data.data)
        })
    }
    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = state => ({
    authData: state.auth
})
const HeaderContainer = connect(mapStateToProps,{setUserAuth})(HeaderGettingAPI)

export default HeaderContainer