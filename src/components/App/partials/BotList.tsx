// Imports
import React from 'react';
import { useBotListData } from '../../DataProviders/BotListProvider';
import { ListGroup, Spinner } from 'react-bootstrap';

/*
 * Generates a list of conversation items
 */
const ConversationList = (props: any): JSX.Element => {
  const data : any = useBotListData();

  if (data.status === 'LOADING') {
    return (
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white border-end" style={{width: "350px", zIndex: 998}}>
        <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <span className="fs-5 fw-semibold">My Bots</span>
        </div>
        <ListGroup variant="flush" className="border-bottom scrollarea">
          <Spinner animation="border" />
        </ListGroup>
      </div>
    );
  } else if (data.status === 'ERROR') {
    return <div />;
  }

  return (
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white border-end" style={{width: "350px", zIndex: 998}}>
      <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
        <span className="fs-5 fw-semibold">My Bots</span>
      </div>
      <ListGroup variant="flush" className="border-bottom scrollarea" style={{}}>
        {(data.value || []).map((botItem : BotInfo, index : number) => (
          <ListGroup.Item key={index} action className="py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">{botItem.name}</strong>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ConversationList;
