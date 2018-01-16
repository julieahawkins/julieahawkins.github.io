import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const appRoot = 
  <BrowserRouter>
    <App />
  </BrowserRouter>;

ReactDOM.render(appRoot, document.getElementById('root'));
registerServiceWorker();
