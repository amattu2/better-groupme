// Imports
import React from 'react';

/**
 * Conversation list header title
 */
const ConversationListHeader = (props: any): JSX.Element => {
  return (
    <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
      <span className="fs-5 fw-semibold">Conversations</span>
    </a>
  );
};

export default ConversationListHeader;
