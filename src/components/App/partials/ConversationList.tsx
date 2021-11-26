// Imports
import React from 'react';
import { useConversationListData } from '../../DataProviders/ConversationList';
import { ListGroup, Spinner } from 'react-bootstrap';
import ConversationListItem from './ConversationListItem';

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
    if (filter === "groups")
      return chatItem.isGroup;
    if (filter === "direct")
      return !chatItem.isGroup;

    return true;
  });

  return (
    <ListGroup variant="flush" className="border-bottom scrollarea">
      {(filteredConvos || []).map((chatItem : ConversationInfo, index : number) => (
        <ConversationListItem
          key={index}
          {... chatItem}
        />
      ))}
    </ListGroup>
  );
};

export default ConversationList;
