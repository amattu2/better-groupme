// Imports
import React from 'react';
import { useData } from '../../DataProvider';
import { ListGroup } from 'react-bootstrap';
import ConversationListItem from './ConversationListItem';

/*
 * Generates a list of conversation items
 */
const ConversationList = (props: any): JSX.Element => {
  const { filter } : any = props;
  const { conversations } : any = useData();
  const filteredConvos = conversations.filter((chatItem : ConversationInfo) => {
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
