import React from 'react';
import { Button } from 'react-bootstrap';
import { BsPatchPlus } from 'react-icons/bs';
import BotList from './BotList';

/**
 * Conversation list filter pills
 */
const SideBots = (): JSX.Element => {
  return (
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white border-end" style={{width: "350px", zIndex: 998}}>
      <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
        <span className="fs-5 fw-semibold">My Bots</span>
        <Button variant="outline-primary" className="ms-auto">
          <BsPatchPlus />
        </Button>
      </div>
      <BotList />
    </div>
  );
};

export default SideBots;
