import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from 'react-router-dom';
import {addPost} from './Redux/state';

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App 
                state={state}
                addPost={addPost}
            />
        </BrowserRouter>,
        document.getElementById('root'));
}

