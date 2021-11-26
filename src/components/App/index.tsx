/// <reference types="react-scripts" />

// Imports
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from '../AuthProvider';
import AppWrapper from './AppWrapper';

/**
 * Main React App
 */
const App = (props: any) : JSX.Element => {
  return (
    <HashRouter basename="/">
      <AuthProvider>
        <AppWrapper />
      </AuthProvider>
    </HashRouter>
  );
};

export default App;
