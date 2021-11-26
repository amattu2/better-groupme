// Imports
import React from 'react';
import { ListGroup, Tabs, Tab } from 'react-bootstrap';
import { BotListProvider } from '../../DataProviders/BotListProvider';
import { useAuth } from '../../AuthProvider';
import BotList from './BotList';

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
            <p className="m-0">An error occurred fetching bots</p>
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
const SideBots = (props: any): JSX.Element => {
  const { accessToken } : any = useAuth();

  return (
    <BotListProvider token={accessToken}>
      <BotList />
    </BotListProvider>
  );
};

export default SideBots;
