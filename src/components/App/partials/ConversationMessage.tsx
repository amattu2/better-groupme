// Imports
import React from 'react';
import ConversationMessageContent from './ConversationMessageContent';
import "../style.css";

/**
 * Conversation message container
 */
const ConversationMessage = (props: any): JSX.Element => {
  const { avatar_url, created_at, name, sender_type,
    favorites, attachments, isSystem, isSelf } : any = props;
  const date = new Date(created_at * 1000);
  const extraClass = attachments.length > 0 ? " w-100" : "";

  // Find Correct Message Type
  if (!isSelf) {
    return (
      <li className="clearfix">
        <div className="message-data text-end">
          <span className="message-data-time me-1">
            {date.toISOString().split('T')[0]} at TBD &middot;&nbsp;
            {sender_type === "user" ? <a href="#/">{name}</a> : name}
          </span>
          {sender_type !== "system" && <img src={avatar_url ? avatar_url : "https://via.placeholder.com/40x40"} alt="avatar" />}
        </div>
        <div className={"message other-message float-end text-start" + extraClass}>
          <ConversationMessageContent {...props} />
        </div>
      </li>
    );
  }

  // Default
  return (
    <li className="clearfix">
      <div className="message-data">
        <img src={avatar_url ? avatar_url : "https://via.placeholder.com/40x40"} alt="avatar" />
        <span className="message-data-time me-1">{date.toISOString().split('T')[0]} at TBD</span>
      </div>
      <div className={"message my-message float-start" + extraClass}>
        <ConversationMessageContent {...props} />
      </div>
    </li>
  );
};

export default ConversationMessage;
