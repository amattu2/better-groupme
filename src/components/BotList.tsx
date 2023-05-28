import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Spinner } from 'react-bootstrap';
import { useBotListData } from './Contexts/BotList';

/*
 * Generates a list of bot items
 */
const BotList = (props: any): JSX.Element => {
  const { status, value } : BotListProviderState = useBotListData();

  if (status === 'LOADING') {
    return (
      <ListGroup variant="flush" className="border-bottom scrollarea">
        <Spinner animation="border" />
      </ListGroup>
    );
  }

  if (status === 'ERROR') {
    return <div>Error loading bot list</div>;
  }

  return (
    <ListGroup variant="flush" className="border-bottom scrollarea">
      {(value || []).map(({ id, name, avatar_url } : BotInfo, index : number) => (
        <Link to={`/bots/${id}`} className='generic-link'>
          <ListGroup.Item key={index} action className="py-3 lh-tight">
              <div className="d-flex w-100 align-items-center justify-content-between">
                <strong className="mb-1">{name}</strong>
              </div>
              <div className="col-10 mb-1 small">
                #{id}
              </div>
          </ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  );
};

export default BotList;
