// Imports
import React from 'react';
import { ListGroup } from 'react-bootstrap';

/*
 * A conversation sidebar list item
 */
const ConversationListItem = (props: any): JSX.Element => {
  const { id, name, message_date, isGroup, author, message, active } : any = props;

  const handleClick = () : void => {
    window.location.hash = `/${isGroup ? "group" : "conversation"}/${id}`;
  };

  return (
    <ListGroup.Item action active={active} className="py-3 lh-tight" onClick={handleClick}>
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong className="mb-1">{name}</strong>
        <small>{message_date.toISOString().split('T')[0]}</small>
      </div>
      <div className="col-10 mb-1 small">
        <b>{isGroup ? `${author}: ` : ""}</b>
        {message}
      </div>
    </ListGroup.Item>
  );
};

export default ConversationListItem;
