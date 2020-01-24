import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css'
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import NewsContainer from './components/News/NewsContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {getInitialization} from './Redux/AppReducer'
import Preloader from './common/Preloader';
class App extends React.Component {
  componentDidMount() {
    this.props.getInitialization()
  }
  render() {
    
      if(!this.props.initialization) {
        return <Preloader/>
      }

      return (
        <div className="app-wrapper">
          <HeaderContainer/>
          <Nav />
          <div className="main-content">
            <Route path='/messages' render={()=> <DialogsContainer />} />
            <Route path='/profile/:userId?' render={()=> <ProfileContainer />}/>
            <Route path='/news' render={() => <NewsContainer/>} />
            <Route path='/users' render={()=><UsersContainer/>} />
            <Route path='/login' render={()=> <LoginPage/>} />
          </div>
        </div>
      )
  }
}




const mapStateToProps = state => ({
  initialization: state.app.initialization
})

export default compose(
  withRouter,
  connect(mapStateToProps,{getInitialization})
)(App);
