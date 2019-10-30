import React from 'react';
import './App.css'
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <Profile/>
    </div>
    
  );
}





export default App;
