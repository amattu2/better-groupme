import React from 'react';
import Components from './components/index';

export default class App extends React.Component {
  render() {
    return (
      <div className="d-flex h-100">
        <div className="d-flex h-100">
          <Components.Sidebar />
          <Components.Conversations />
        </div>
        <div className="d-flex-fill w-100 bg-light">
          <h1>This container fills the flex</h1>
        </div>
      </div>
    );
  }
}
