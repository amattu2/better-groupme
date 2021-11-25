import React from 'react';
import ReactDOM from 'react-dom';
import Dotenv from 'dotenv';
import App from './components/App';

// Initialize Config
Dotenv.config();

/*  window.location.href = `https://oauth.groupme.com/oauth/authorize?client_id=${process.env.REACT_APP_GM_CLIENT}`;  */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
