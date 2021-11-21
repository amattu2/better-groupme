import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ConversationListItem from './ConversationListItem';

export default class ConversationList extends React.Component {
  render() {
    const styles2 = {
      overflow: "auto",
    };

    return (
      <ListGroup variant="flush" className="border-bottom scrollarea" style={styles2}>
        <ConversationListItem />
      </ListGroup>
    );
  }
}
