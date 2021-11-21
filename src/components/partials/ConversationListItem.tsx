import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default class ConversationListItem extends React.Component {
  render() {
    return (
      <ListGroup.Item action className="py-3 lh-tight">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">Ben Mourside</strong>
          <small>Today</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </ListGroup.Item>
    );
  }
}
