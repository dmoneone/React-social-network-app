import React from 'react';
import {Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';


const  App = props => {
  console.log(props)
  return (
    
    <div className="app-wrapper">
      <Header/>
      <Nav navComponent={props.state.navComponent} />
      <div className="main-content">
        <Route path='/messages' render={()=> <Dialogs dialogsPage={props.state.dialogsPage} />} />
        <Route path='/profile' render={()=> <Profile profilePage={props.state.profilePage}
                                                     addPost={props.addPost}
                                                     replaceNewPostMsg={props.replaceNewPostMsg}
                                             />
        }/>
        <Route path='/news' component={News} />
      </div>
    </div>
  );
}






export default App;
