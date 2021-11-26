// Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import { ConversationListProvider } from '../DataProviders/ConversationListProvider';
import ConversationWrapper from './ConversationWrapper';
import ConversationFiller from './ConversationFiller';
import SideNavigation from './partials/SideNavigation';
import SideConversations from './partials/SideConversations';
import SideBots from './partials/SideBots'
import SidebarFiller from './SidebarFiller';

/**
 * Application container component
 */
const AppWrapper = (props: any): JSX.Element => {
  const { accessToken } : any = useAuth();

  return (
    <ConversationListProvider token={accessToken}>
      {/* Main Container */}
      <div className="d-flex h-100">
      
        {/* Navigation */}
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

        {/* Container Element */}
        <Routes>
          <Route path='/' element={<ConversationFiller />} />
          <Route path='/:type/:id' element={<ConversationWrapper />} />
          <Route path='/bots/' element={<h3>Bots</h3>} />
        </Routes>
      </div>
    </ConversationListProvider>
  );
};

export default AppWrapper;
