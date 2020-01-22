import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Route} from 'react-router-dom';
//import store from './Redux/state';
import store from './Redux/redux-store';
import {Provider} from 'react-redux';



const renderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}

//store.getState()
renderEntireTree(store);

/*store.subscribe(()=>{
    renderEntireTree(store.getState());
});*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
