// Imports
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { BsPatchPlus } from 'react-icons/bs';
import { BotListProvider } from '../../DataProviders/BotList';
import { useAuth } from '../../AuthProvider';
import BotList from './BotList';

/**
 * Error boundary for BotList
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
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white border-end" style={{width: "350px", zIndex: 998}}>
        <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <span className="fs-5 fw-semibold">My Bots</span>
          <Button variant="outline-primary" className="ms-auto">
            <BsPatchPlus />
          </Button>
        </div>
        <ErrorBoundary>
          <BotList />
        </ErrorBoundary>
      </div>
    </BotListProvider>
  );
};

export default SideBots;
