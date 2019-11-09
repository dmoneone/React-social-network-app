import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dialogData = [
    {name: 'Kurash', id: 1},
    {name: 'Salo', id: 2},
    {name: 'Kate', id: 3}
];

const messagesData = [
    {msg: "Dash pisky ebat?"},
    {msg: "228"},
    {msg: "ass"}
];

const postsData = [
    {msg: "jopa", quantityOfLikes: 10},
    {msg: "Chlen", quantityOfLikes: 100}
];

ReactDOM.render(<App 
        dialogData={dialogData} 
        messagesData={messagesData}
        postsData={messagesData}
        />,
        document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
