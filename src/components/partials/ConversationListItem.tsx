// Imports
import React from 'react';
import { ListGroup } from 'react-bootstrap';

/*
 * A conversation sidebar list item
 */
export default class ConversationListItem extends React.Component<any, any> {
  /**
   * Class constructor
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T14:40:56-050
   */
  constructor(props : object) {
    super(props);
  }

  /**
   * Render component
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T14:41:25-050
   */
  render() {
    return (
      <ListGroup.Item action className="py-3 lh-tight">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">{this.props.name}</strong>
          <small>{this.props.message_date.getDay()}</small>
        </div>
        <div className="col-10 mb-1 small">
          <b>{this.props.isGroup ? `${this.props.author}: ` : ""}</b>
          {this.props.message}
        </div>
      </ListGroup.Item>
    );
  }
}
