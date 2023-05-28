// Imports
import React from 'react';
import { useConversationListData } from './Contexts/ConversationList';
import { ListGroup, Spinner } from 'react-bootstrap';

/*
 * Generates a list of conversation items
 */
const ConversationList = (props: any): JSX.Element => {
  const { filter } : any = props;
  const data : any = useConversationListData();

  if (data.status === 'LOADING') {
    return (
      <ListGroup variant="flush" className="border-bottom scrollarea">
        <Spinner animation="border" />
      </ListGroup>
    );
  } else if (data.status === 'ERROR') {
    return <div />;
  }

  const filteredConvos = data.value.filter((chatItem : ConversationInfo) => {
    if (filter === "groups") {
      return chatItem.isGroup;
    }
    if (filter === "direct") {
      return !chatItem.isGroup;
    }

    return true;
  });

  return (
    <ListGroup variant="flush" className="border-bottom scrollarea">
      {(filteredConvos || []).map((chatItem : ConversationInfo, index : number) => (
        <ListGroup.Item key={index} href={`#/${chatItem.isGroup ? "group" : "conversation"}/${chatItem.id}`} action className="py-3 lh-tight">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">{chatItem.name}</strong>
            <small>{chatItem.preview.message_date.toISOString().split('T')[0]}</small>
          </div>
          <div className="col-10 mb-1 small">
            <b>{chatItem.isGroup ? `${chatItem.preview.author}: ` : ""}</b>
            {chatItem.preview.message}
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ConversationList;
