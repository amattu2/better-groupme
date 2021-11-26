// Imports
import React from 'react';
import { ListGroup, Tabs, Tab, Button } from 'react-bootstrap';
import { BsBookmarkPlus } from 'react-icons/bs';
import ConversationList from './ConversationList';
import "../style.css";

/**
 * Error boundary for ConversationList
 */
class ErrorBoundary extends React.Component<any, any> {
  constructor(props : {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ListGroup variant="flush" className="border-bottom scrollarea">
          <ListGroup.Item action className="py-3 lh-tight">
            <p className="m-0">An error occurred fetching messages</p>
          </ListGroup.Item>
        </ListGroup>
      );
    }

    return this.props.children;
  }
}

/**
 * Combines the sidebar component
 */
const SideConversations = (props: any): JSX.Element => {
  return (
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white border-end" style={{width: "350px", zIndex: 998}}>
      <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
        <span className="fs-5 fw-semibold">Conversations</span>
        <Button variant="outline-primary" className="ms-auto">
          <BsBookmarkPlus />
        </Button>
      </div>
      <Tabs defaultActiveKey="All">
        <Tab eventKey="All" title="All">
          <ErrorBoundary>
            <ConversationList filter="all"/>
          </ErrorBoundary>
        </Tab>
        <Tab eventKey="Direct" title="Direct">
          <ErrorBoundary>
            <ConversationList filter="direct"/>
          </ErrorBoundary>
        </Tab>
        <Tab eventKey="Groups" title="Groups">
          <ErrorBoundary>
            <ConversationList filter="groups"/>
          </ErrorBoundary>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SideConversations;
