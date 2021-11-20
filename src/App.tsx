import React from 'react';
import Components from './components/index';

export default class App extends React.Component {
  render() {
    return (
      <div className="d-flex h-100">
        <Components.Sidebar />
        <Components.Conversations />
      </div>
    );
  }
}
