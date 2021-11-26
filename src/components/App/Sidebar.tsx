// Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNavigation from './partials/SideNavigation';
import SideConversations from './partials/SideConversations';
import SideBots from './partials/SideBots'
import SidebarFiller from './SidebarFiller';

/**
 * Complete sidebar component
 */
const Sidebar = (props: any): JSX.Element => {
  return (
    <div className="d-flex h-100">
      <SideNavigation />
      <Routes>
        <Route path='/' element={<SideConversations />} />
        <Route path='/group/:id' element={<SideConversations />} />
        <Route path='/conversation/:id' element={<SideConversations />} />
        <Route path='/contacts' element={<SidebarFiller />} />
        <Route path='/archive' element={<SidebarFiller />} />
        <Route path='/bots' element={<SideBots />} />
        <Route path='/settings' element={<SidebarFiller />} />
      </Routes>
    </div>
  );
};

export default Sidebar;
