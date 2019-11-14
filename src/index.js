import * as serviceWorker from './serviceWorker';
import state,{subscribe} from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Route} from 'react-router-dom';
import {addPost} from './Redux/state';
import {replaceNewPostMsg} from './Redux/state';

const renderEntireTree = () => {
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


renderEntireTree();
subscribe(renderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
