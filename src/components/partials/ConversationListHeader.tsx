// Imports
import React from 'react';

/**
 * Conversation list header title
 */
export default class ConversationListHeader extends React.Component {
  /**
   * Render Component
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T14:40:56-050
   */
  render() {
    return (
      <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
        <span className="fs-5 fw-semibold">Conversations</span>
      </a>
    );
  }
}
