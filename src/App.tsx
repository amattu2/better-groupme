import React from 'react';
import Components from './components/index';
import './App.css';

function App() {
  return (
    <div className="App">
      {Components.Navigation()}
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {Components.Footer()}
    </div>
  );
}

export default App;
