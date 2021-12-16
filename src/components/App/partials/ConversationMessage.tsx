// Imports
import React, { useEffect } from 'react';
import ConversationMessageContent from './ConversationMessageContent';
import "../style.css";

/**
 * Conversation message container
 */
const ConversationMessage = (props: any): JSX.Element => {
  const { id, avatar_url, created_at, name, sender_type,
    favorites, attachments, isSystem, isSelf, isLast } : any = props;
  const date = new Date(created_at * 1000);
  const extraClass = attachments.filter((a : any) => a.type === "image" || a.type === "poll").length > 0 ? " w-100" : "";
  const avatarStyle = {
    width: "40px",
    height: "40px",
  };

  useEffect(() => {
    if (!isLast || !id) {
      return;
    }

    const element = document.getElementById(`convo-message-${id}`);

    element?.scrollIntoView({behavior: "smooth"});
  }, [isLast, id]);

  // Find Correct Message Type
  if (!isSelf) {
    return (
      <li className="clearfix" id={"convo-message-" + id}>
        <div className="message-data text-end">
          <span className="message-data-time me-1">
            {date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'})} &middot;&nbsp;
            {sender_type === "user" ? <a href="#/">{name}</a> : name}
          </span>
          {sender_type !== "system" && <img src={avatar_url ? avatar_url : "https://via.placeholder.com/40x40"} alt="avatar" style={avatarStyle} />}
        </div>
        <div className={"message other-message float-end text-start" + extraClass}>
          <ConversationMessageContent {...props} />
        </div>
      </li>
    );
  }

  // Default
  return (
    <li className="clearfix" id={"convo-message-" + id}>
      <div className="message-data">
        <img src={avatar_url ? avatar_url : "https://via.placeholder.com/40x40"} alt="avatar" style={avatarStyle} />
        <span className="message-data-time me-1">{date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</span>
      </div>
      <div className={"message my-message float-start" + extraClass}>
        <ConversationMessageContent {...props} />
      </div>
    </li>
  );
};

export default ConversationMessage;
