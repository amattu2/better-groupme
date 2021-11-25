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
      {(conversations || []).map((chatItem : MessageListMessage, index : number) => (
        <ConversationListItem
          id={chatItem.id}
          key={index}
          isGroup={chatItem.isGroup}
          name={chatItem.name}
          message_date={chatItem.message_date}
          message={chatItem.message}
          author={chatItem.author}
        />
      ))}
    </ListGroup>
  );
};

export default ConversationList;
