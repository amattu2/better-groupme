// Imports
import React from 'react';
import { useData } from '../../DataProvider';
import { ListGroup } from 'react-bootstrap';
import ConversationListItem from './ConversationListItem';

/*
 * Generates a list of conversation items
 */
const ConversationList = (props: any): JSX.Element => {
  const { conversations } : any = useData();

  return (
    <ListGroup variant="flush" className="border-bottom scrollarea" style={{overflow: "auto"}}>
      {(conversations || []).map((chatItem : ConversationInfo, index : number) => (
        <ConversationListItem
          key={index}
          {... chatItem}
        />
      ))}
    </ListGroup>
  );
};

export default ConversationList;
