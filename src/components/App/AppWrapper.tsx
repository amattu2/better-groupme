// Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import { UserProfileProvider } from '../DataProviders/UserProfile';
import { ConversationListProvider } from '../DataProviders/ConversationList';
import { BotListProvider } from '../DataProviders/BotList';
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
    <UserProfileProvider token={accessToken}>
      <ConversationListProvider token={accessToken}>
        <BotListProvider token={accessToken}>
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
                <Route path='/bots/:id' element={<SideBots />} />
              </Routes>
            </div>

            {/* Container Element */}
            <Routes>
              <Route path='/' element={<ConversationFiller />} />
              <Route path='/:type/:id' element={<ConversationWrapper />} />
              <Route path='/:type/:id' element={<ConversationWrapper />} />
              <Route path='/bots' element={<h3>Bots</h3>} />
              <Route path='/bots/:id' element={<h3>Bot id</h3>} />
              <Route path='/contacts' element={<h3>contacts</h3>} />
              <Route path='/archive/' element={<h3>archive</h3>} />
              <Route path='/settings/' element={<h3>settings</h3>} />
            </Routes>
          </div>
        </BotListProvider>
      </ConversationListProvider>
    </UserProfileProvider>
  );
};

export default AppWrapper;
