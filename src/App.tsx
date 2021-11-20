import React from 'react';
import Components from './components/index';
import './App.css';

function App() {
  return (
    <div className="App">
      {Components.Navigation()}
      <h2>Body contents</h2>
      {Components.Footer()}
    </div>
  );
}

export default App;
