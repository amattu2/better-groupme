/// <reference types="react-scripts" />

// Imports
import React from 'react';
import { HashRouter, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../AuthProvider';
import Sidebar from './Sidebar';
import Conversation from './Conversation';

/**
* Fetch conversation
*
* @author Alec M. <https://amattu.com>
* @date 2021-11-24T15:43:41-050
*/
const changeConversation = async (accessToken : string, id : string, isGroup : boolean) : Promise<any> => {
 // Variables
 const url = isGroup ? `https://api.groupme.com/v3/groups/${id}/messages?access_token=${accessToken}` :
   `https://api.groupme.com/v3/direct_messages?other_user_id=${id}&access_token=${accessToken}`
 const data = await fetch(url);
 const dataJson = await data.json();
 console.log(dataJson);
}

/**
 * Main React App
 */
const App = (props: any) : JSX.Element => {
  return (
    <HashRouter basename="/">
      <AuthProvider>
        <div className="d-flex h-100">
          <Sidebar />
          <Conversation />
        </div>
      </AuthProvider>
    </HashRouter>
  );
};

export default App;
