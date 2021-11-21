import React from 'react';

export default class ConversationListHeader extends React.Component {
  render() {
    return (
      <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
        <span className="fs-5 fw-semibold">Conversations</span>
      </a>
    );
  }
}
