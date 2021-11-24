// Imports
import React from 'react';
import { Nav } from 'react-bootstrap';

/**
 * Conversation list filter pills
 */
export default class FilterTabs extends React.Component {
  render() {
    return (
      <Nav variant="tabs" defaultActiveKey="all">
        <Nav.Item>
          <Nav.Link eventKey="all">All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="users">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="groups">Groups</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
