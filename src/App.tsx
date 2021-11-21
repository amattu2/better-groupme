import React from 'react';
import Sidebar from './components/Sidebar';
import Conversation from './components/Conversation';

export default class App extends React.Component {
  render() {
    return (
      <div className="d-flex h-100">
        <Sidebar />
        <Conversation />
      </div>
    );
  }
}
