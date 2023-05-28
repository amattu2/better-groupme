// Imports
import React from 'react';
import { useParams } from 'react-router-dom';
import Conversation from '../components/Conversation';
import { ConversationProvider } from '../components/Contexts/Conversation';
import { useAuth } from '../components/Contexts/AuthProvider';

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
    <ConversationProvider id={id} type={type} token={accessToken} >
      <ErrorBoundary>
        <Conversation id={id} />
      </ErrorBoundary>
    </ConversationProvider>
  );
};

export default ConversationWrapper;
