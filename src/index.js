import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Link from './Link.react';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Link page="http://www.facebook.com">Facebook</Link>, document.getElementById('custom-link'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
