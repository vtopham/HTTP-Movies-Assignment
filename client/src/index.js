import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import '98.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
