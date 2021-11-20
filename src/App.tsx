import React from 'react';
import Components from './components/index';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {Components.Navigation()}
        <h2>Body contents</h2>
        {Components.Footer()}
      </div>
    );
  }
}
