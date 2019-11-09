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
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Nav/>
        <div className="main-content">
          <Route path='/messages' render={()=> <Dialogs dialogData={props.dialogData} messagesData={props.messagesData} />} />
          <Route path='/profile' render={()=> <Profile postsData={props.postsData} />} />
          <Route path='/news' component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
}






export default App;
