// Imports
import React from 'react';
import { ListGroup, Tabs, Tab } from 'react-bootstrap';
import ConversationList from './ConversationList';
import "../chat.css";

/**
 * Error boundary for Conversation List
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
 * Conversation list filter pills
 */
const FilterTabs = (props: any): JSX.Element => {
  return (
    <Tabs defaultActiveKey="All">
      <Tab eventKey="All" title="All">
        <ErrorBoundary>
          <ConversationList filter="all" />
        </ErrorBoundary>
      </Tab>
      <Tab eventKey="Direct" title="Direct">
        <ErrorBoundary>
          <ConversationList filter="direct" />
        </ErrorBoundary>
      </Tab>
      <Tab eventKey="Groups" title="Groups">
        <ErrorBoundary>
          <ConversationList filter="groups" />
        </ErrorBoundary>
      </Tab>
    </Tabs>
  );
};

export default FilterTabs;
