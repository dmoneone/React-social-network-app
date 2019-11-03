import React from 'react';
import './App.css'
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      
      <div className="main-content">
        <Profile/>
      </div>
    </div>
    
  );
}





export default App;
