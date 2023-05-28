// Imports
import React from 'react';
import { Nav } from 'react-bootstrap';
import { BsFillChatRightTextFill, BsGridFill } from "react-icons/bs";
import { AiFillRobot } from "react-icons/ai";
import { Routes, Route } from 'react-router-dom';
import SideBots from './SideBots';
import SideConversations from './SideConversations';

/**
 * Sidebar navigation container
 */
const Sidebar = (props: any): JSX.Element => {
  return (
    <div className="d-flex h-100">
      <div className="d-flex flex-column flex-shrink-0 bg-white border-end" style={{zIndex: 999}}>
        <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <span className="fs-5 fw-semibold">&nbsp;</span>
        </a>
        <Nav variant="pills" className="nav-flush flex-column mb-auto text-center">
          <Nav.Link href="#/" className="border-bottom" style={{borderRadius: 0}}>
            <BsFillChatRightTextFill />
          </Nav.Link>
          {/* <Nav.Link href="#/contacts" className="border-bottom" title="Contacts" style={{borderRadius: 0}}>
            <BsPeopleFill />
          </Nav.Link>
          <Nav.Link href="#/archive" className="border-bottom" title="Group Archive" style={{borderRadius: 0}}>
            <BsFillArchiveFill />
          </Nav.Link> */}
          <Nav.Link href="#/bots" className="border-bottom" title="My Bots" style={{borderRadius: 0}}>
            <AiFillRobot />
          </Nav.Link>
        </Nav>
        <div className="border-top">
          <a href="#/settings" className="d-flex align-items-center justify-content-center p-3 text-decoration-none">
            <BsGridFill />
          </a>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<SideConversations />} />
        <Route path='/group/:id' element={<SideConversations />} />
        <Route path='/conversation/:id' element={<SideConversations />} />
        {/* <Route path='/contacts' element={<SidebarFiller />} /> */}
        {/* <Route path='/archive' element={<SidebarFiller />} /> */}
        <Route path='/bots' element={<SideBots />} />
        <Route path='/bots/:id' element={<SideBots />} />
      </Routes>
    </div>
  );
};

export default Sidebar;
