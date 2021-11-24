import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ConversationListItem from './ConversationListItem';

export default class ConversationList extends React.Component {
  render() {
    return (
      <ListGroup variant="flush" className="border-bottom scrollarea" style={{overflow: "auto"}}>
        <ConversationListItem />
      </ListGroup>
    );
  }
}
