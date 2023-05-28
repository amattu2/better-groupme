import React from 'react';
import ReactDOM from 'react-dom';
import Dotenv from 'dotenv';
import App from './content';

Dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
