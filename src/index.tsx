import React from 'react';
import ReactDOM from 'react-dom';
import Dotenv from 'dotenv';
import App from './App';

// Initialize Config
Dotenv.config();

/**
 * URL Query Params
 *
 * @type {URLSearchParams}
 */
const params : URLSearchParams = new URLSearchParams(window.location.search);
if (params.get("access_token")) {
  const date = new Date();
  date.setTime(date.getTime() + (7*24*60*60*1000));
  document.cookie = `access_token=${(params.get("access_token") || "")}; expires=${date.toUTCString()}; path=/`;
}

/**
 * GroupMe Access Token Cookie
 *
 * @type {String}
 */
const accessToken : string = (document.cookie.match(/^(?:.*;)?\s*access_token\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1] || "";
if (!accessToken) {
  window.location.href = `https://oauth.groupme.com/oauth/authorize?client_id=${process.env.REACT_APP_GM_CLIENT}`;
}

ReactDOM.render(
  <React.StrictMode>
    <App accessToken={accessToken} />
  </React.StrictMode>,
  document.getElementById('root')
);
