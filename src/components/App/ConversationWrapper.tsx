// Imports
import React from 'react';
import Conversation from './partials/Conversation';
import { ConversationProvider } from '../DataProviders/ConversationProvider';
import { ConversationListProvider } from '../DataProviders/ConversationListProvider';
import { useAuth } from '../AuthProvider';
import { useParams } from 'react-router-dom';

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
        <div className="d-flex-fill w-100 bg-light position-relative">
          <p className="m-0">An error occurred fetching conversation</p>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Conversation filler container
 */
const ConversationWrapper = (props: any): JSX.Element => {
  const { accessToken } : any = useAuth();
  const { type, id } : any = useParams();

  return (
    <ConversationListProvider token={accessToken} >
      <ConversationProvider id={id} type={type} token={accessToken} >
        <ErrorBoundary>
          <Conversation id={id} />
        </ErrorBoundary>
      </ConversationProvider>
    </ConversationListProvider>
  );
};

export default ConversationWrapper;
