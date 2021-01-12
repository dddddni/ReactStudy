//import 'bootstrap/dist/css/bootstrap.css';
//import React from 'react';
//import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
//const rootElement = document.getElementById('root');

//ReactDOM.render(
//  <BrowserRouter basename={baseUrl}>
//    <App />
//  </BrowserRouter>,
//  rootElement);

//registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './components/style/index.css';
import './components/style/content.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
