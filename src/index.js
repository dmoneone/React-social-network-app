import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialNetworkApp from './App';

ReactDOM.render(<SocialNetworkApp/>,document.getElementById('root'));

serviceWorker.unregister();
