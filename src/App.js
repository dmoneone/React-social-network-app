import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Nav/>
        <div className="main-content">
          <Route path='/messages' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
}






export default App;
