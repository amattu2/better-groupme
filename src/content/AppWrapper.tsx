// Imports
/*
 * Produced: Tue Dec 20 2022
 * Author: Alec M.
 * GitHub: https://amattu.com/links/github
 * Copyright: (C) 2022 Alec M.
 * License: License GNU Affero General Public License v3.0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../components/Contexts/AuthProvider'
import { UserProfileProvider } from '../components/Contexts/UserProfile';
import { ConversationListProvider } from '../components/Contexts/ConversationList'
import { BotListProvider } from '../components/Contexts/BotList'
import ConversationWrapper from './ConversationWrapper';
import ConversationFiller from './ConversationFiller';
import SideNavigation from '../components/SideNavigation'
import SideConversations from '../components/SideConversations';
import SideBots from '../components/SideBots'
import SidebarFiller from './SidebarFiller';
import GenericFiller from './GenericFiller';

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
                {/* <Route path='/contacts' element={<SidebarFiller />} /> */}
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
              <Route path='/bots' element={<GenericFiller />} />
              <Route path='/bots/:id' element={<h3>Bot id</h3>} />
              {/* <Route path='/contacts' element={<h3>contacts</h3>} /> */}
              {/* <Route path='/archive/' element={<h3>archive</h3>} /> */}
              <Route path='/settings/' element={<h3>settings</h3>} />
            </Routes>
          </div>
        </BotListProvider>
      </ConversationListProvider>
    </UserProfileProvider>
  );
};

export default AppWrapper;
