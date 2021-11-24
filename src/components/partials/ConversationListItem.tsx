import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default class ConversationListItem extends React.Component<any, any> {
  constructor(props : object) {
    super(props);
  }

  render() {
    return (
      <ListGroup.Item action className="py-3 lh-tight">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">{this.props.name}</strong>
          <small>{this.props.date_string}</small>
        </div>
        <div className="col-10 mb-1 small">
          <b>{this.props.isGroup ? this.props.author : ""}</b>:
          {this.props.last_message}
        </div>
      </ListGroup.Item>
    );
  }
}
