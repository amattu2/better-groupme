// Imports
import React from 'react';
import Sidebar from './components/Sidebar';
import Conversation from './components/Conversation';

export default class App extends React.Component<any, any> {
  constructor(props : object) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex h-100">
        <Sidebar {...this.props} />
        <Conversation {...this.props} />
      </div>
    );
  }
}
