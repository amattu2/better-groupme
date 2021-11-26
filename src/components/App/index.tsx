/// <reference types="react-scripts" />

// Imports
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../AuthProvider';
import { DataProvider } from '../DataProvider';
import Sidebar from './Sidebar';
import ConversationWrapper from './ConversationWrapper';
import ConversationFiller from './ConversationFiller';

/**
 * Main React App
 */
const App = (props: any) : JSX.Element => {
  return (
    <HashRouter basename="/">
      <AuthProvider>
        <DataProvider>
          <div className="d-flex h-100">
            <Sidebar />
            <Routes>
              <Route path='/' element={<ConversationFiller />} />
              <Route path='/:type/:id' element={<ConversationWrapper />} />
            </Routes>
          </div>
        </DataProvider>
      </AuthProvider>
    </HashRouter>
  );
};

export default App;
