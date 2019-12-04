import React from 'react';
import {Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const  App = props => {
  return (
    
    <div className="app-wrapper">
      <Header/>
      <Nav />
      <div className="main-content">
        <Route path='/messages' render={()=> <DialogsContainer />} />
        <Route path='/profile' render={()=> <ProfileContainer />}/>
        <Route path='/news' component={News} />
        <Route path='/users' render={()=><UsersContainer/>} />
      </div>
    </div>
  );
}






export default App;
