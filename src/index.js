import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './Components/App/App';

const appRoot = 
  <BrowserRouter>
    <App />
  </BrowserRouter>;

ReactDOM.render(appRoot, document.getElementById('root'));
registerServiceWorker();
