import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';


const  App = props => {
 
  return (
    
    <div className="app-wrapper">
      <Header/>
      <Nav state={props.state.navComponent} />
      <div className="main-content">
        <Route path='/messages' render={()=> <Dialogs state={props.state.dialogsPage} />} />
        <Route path='/profile' render={()=> <Profile state={props.state.profilePage} addPost={props.addPost}/>} />
        <Route path='/news' component={News} />
      </div>
    </div>
  );
}






export default App;
