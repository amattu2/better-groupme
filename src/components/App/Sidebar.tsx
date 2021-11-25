// Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNavigation from './partials/SideNavigation';
import SideConversations from './partials/SideConversations';

/**
 * Complete sidebar component
 */
const Sidebar = (props: any): JSX.Element => {
  return (
    <div className="d-flex h-100">
      <SideNavigation />
      <Routes>
        <Route path='/' element={<SideConversations />} />
      </Routes>
    </div>
  );
};

export default Sidebar;
