// Imports
import React from 'react';
import { useBotListData } from '../../DataProviders/BotList';
import { ListGroup, Spinner } from 'react-bootstrap';

/*
 * Generates a list of bot items
 */
const BotList = (props: any): JSX.Element => {
  const data : any = useBotListData();

  if (data.status === 'LOADING') {
    return (
      <ListGroup variant="flush" className="border-bottom scrollarea">
        <Spinner animation="border" />
      </ListGroup>
    );
  } else if (data.status === 'ERROR') {
    return <div />;
  }

  return (
    <ListGroup variant="flush" className="border-bottom scrollarea">
      {(data.value || []).map((botItem : BotInfo, index : number) => (
        <ListGroup.Item key={index} href={"#/bots/" + botItem.id} action className="py-3 lh-tight">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">{botItem.name}</strong>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default BotList;
