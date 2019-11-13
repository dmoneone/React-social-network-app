import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Route} from 'react-router-dom';
import {addPost} from './Redux/state';
import {replaceNewPostMsg} from './Redux/state';

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App 
                state={state}
                addPost={addPost}
                replaceNewPostMsg={replaceNewPostMsg}
            />
        </BrowserRouter>,
        document.getElementById('root'));
}

