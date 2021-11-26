// Imports
import React from 'react';
import { ListGroup, Tabs, Tab } from 'react-bootstrap';
import { ConversationListProvider } from '../../DataProviders/ConversationListProvider';
import { useAuth } from '../../AuthProvider';
import ConversationList from './ConversationList';
import "../style.css";

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
  const { accessToken } : any = useAuth();

  return (
    <Tabs defaultActiveKey="All">
      <Tab eventKey="All" title="All">
        <ErrorBoundary>
          <ConversationListProvider token={accessToken} >
            <ConversationList filter="all"/>
          </ConversationListProvider>
        </ErrorBoundary>
      </Tab>
      <Tab eventKey="Direct" title="Direct">
        <ErrorBoundary>
          <ConversationListProvider token={accessToken} >
            <ConversationList filter="direct"/>
          </ConversationListProvider>
        </ErrorBoundary>
      </Tab>
      <Tab eventKey="Groups" title="Groups">
        <ErrorBoundary>
          <ConversationListProvider token={accessToken} >
            <ConversationList filter="groups"/>
          </ConversationListProvider>
        </ErrorBoundary>
      </Tab>
    </Tabs>
  );
};

export default FilterTabs;
