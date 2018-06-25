//Start up point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
//import Home from './components/Home'; //now we moved to routes


ReactDOM.hydrate(
<BrowserRouter> 
    <Routes />
</BrowserRouter>
, document.querySelector('#root')
);