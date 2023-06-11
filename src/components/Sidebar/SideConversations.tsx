import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { BsBookmarkPlus } from 'react-icons/bs';
import ConversationList from './ConversationList';

/**
 * Combines the sidebar component
 */
const SideConversations = (): JSX.Element => (
  <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white border-end" style={{width: "350px", zIndex: 998}}>
    <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
      <span className="fs-5 fw-semibold">Conversations</span>
      <Button variant="outline-primary" className="ms-auto">
        <BsBookmarkPlus />
      </Button>
    </div>
    <Tabs defaultActiveKey="All">
      <Tab eventKey="All" title="All">
        <ConversationList filter="all"/>
      </Tab>
      <Tab eventKey="Direct" title="Direct">
        <ConversationList filter="direct"/>
      </Tab>
      <Tab eventKey="Groups" title="Groups">
        <ConversationList filter="groups"/>
      </Tab>
    </Tabs>
  </div>
);

export default SideConversations;
