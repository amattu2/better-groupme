/// <reference types="react-scripts" />

// Imports
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../AuthProvider';
import AppWrapper from './AppWrapper';

/**
 * Main React App
 */
const App = (props: any) : JSX.Element => {
  return (
    <Router basename="/">
      <AuthProvider>
        <AppWrapper />
      </AuthProvider>
    </Router>
  );
};

export default App;
