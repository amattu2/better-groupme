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
import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../components/Contexts/AuthProvider";
import BotView from "./BotView";
import { BotListProvider } from "../components/Contexts/BotList";
import { ConversationListProvider } from "../components/Contexts/ConversationList";
import { UserProfileProvider } from "../components/Contexts/UserProfile";
import GenericFiller from "../components/GenericFiller";
import Sidebar from "../components/Sidebar";
import ConversationWrapper from "./ConversationWrapper";
import "../css/style.css";

/**
 * Main React App
 */
const App = (props: any): JSX.Element => {
  return (
    <Router basename="/">
      <AuthProvider>
        <UserProfileProvider>
          <ConversationListProvider>
            <BotListProvider>
              {/* Main Container */}
              <div className="d-flex h-100">

                {/* Navigation */}
                <Sidebar />

                {/* Container Element */}
                <Routes>
                  <Route path='/' element={<GenericFiller placeholder='Select a conversation' />} />
                  <Route path='/:type/:id' element={<ConversationWrapper />} />
                  <Route path='/bots' element={<GenericFiller placeholder='Select a bot' />} />
                  <Route path='/bots/:id' element={<BotView />} />
                  {/* <Route path='/contacts' element={<h3>contacts</h3>} /> */}
                  {/* <Route path='/archive/' element={<h3>archive</h3>} /> */}
                  <Route path='/settings' element={<h3>settings</h3>} />
                </Routes>
              </div>
            </BotListProvider>
          </ConversationListProvider>
        </UserProfileProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
