import React from 'react';
import {Route} from 'react-router-dom';
import './App.css'
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';


const  App = props => {
  return (
    
    <div className="app-wrapper">
      <HeaderContainer/>
      <Nav />
      <div className="main-content">
        <Route path='/messages' render={()=> <DialogsContainer />} />
        <Route path='/profile/:userId?' render={()=> <ProfileContainer />}/>
        <Route path='/news' component={News} />
        <Route path='/users' render={()=><UsersContainer/>} />
        <Route path='/login' render={()=> <LoginPage/>} />
      </div>
    </div>
  );
}






export default App;
