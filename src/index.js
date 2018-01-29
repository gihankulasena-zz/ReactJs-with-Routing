import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'));


registerServiceWorker();
