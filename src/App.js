import React from 'react';
import {Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';


const  App = props => {
  return (
    
    <div className="app-wrapper">
      <Header/>
      <Nav />
      <div className="main-content">
        <Route path='/messages' render={()=> <DialogsContainer />} />
        <Route path='/profile' render={()=> <Profile />}/>
        <Route path='/news' component={News} />
        <Route path='/users' render={()=><UsersContainer/>} />
      </div>
    </div>
  );
}






export default App;
