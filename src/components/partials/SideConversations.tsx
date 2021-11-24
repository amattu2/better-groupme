// Imports
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ConversationListHeader from './ConversationListHeader';
import FilterTabs from './FilterTabs';
import ConversationList from './ConversationList';

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
 * Combines the sidebar component
 */
export default class Conversations extends React.Component<any, any> {
  /**
   * Class constructor
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T14:49:39-050
   */
  constructor(props : object) {
    super(props);
  }

  /**
   * Render component
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T14:40:56-050
   */
  render() {
    return (
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white border-end" style={{width: "350px", zIndex: 998}}>
        <ConversationListHeader />
        <FilterTabs />
        <ErrorBoundary>
          <ConversationList {... this.props} />
        </ErrorBoundary>
      </div>
    );
  }
}
