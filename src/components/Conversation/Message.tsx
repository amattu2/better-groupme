/*
 * Produced: Tue Dec 20 2022
 * Author: Alec M.
 * GitHub: https://amattu.com/links/github
 * Copyright: (C) 2022 Alec M.
 * License: License GNU Affero General Public License v3.0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React, { useEffect } from "react";
import ConversationMessageContent from "./MessageContent";

/**
 * Conversation message container
 */
const ConversationMessage = (props: any): JSX.Element => {
  const {
    id,
    avatar_url,
    created_at,
    name,
    sender_type,
    attachments,
    isSelf,
    isLast,
  }: any = props;
  const date = new Date(created_at * 1000);
  const extraClass =
    attachments.filter((a: any) => a.type === "image" || a.type === "poll")
      .length > 0
      ? " w-100"
      : "";
  const avatarStyle = {
    width: "40px",
    height: "40px",
  };

  useEffect(() => {
    if (!isLast || !id) {
      return;
    }

    const element = document.getElementById(`convo-message-${id}`);

    element?.scrollIntoView({ behavior: "smooth" });
  }, [isLast, id]);

  // Find Correct Message Type
  if (!isSelf) {
    return (
      <li className="clearfix" id={"convo-message-" + id}>
        <div className="message-data text-end">
          <span className="message-data-time me-1">
            {date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}{" "}
            &middot;&nbsp;
            {sender_type === "user" ? <a href="#/">{name}</a> : name}
          </span>
          {sender_type !== "system" && (
            <img
              src={
                avatar_url ? avatar_url : "https://via.placeholder.com/40x40"
              }
              alt="avatar"
              style={avatarStyle}
            />
          )}
        </div>
        <div
          className={"message other-message float-end text-start" + extraClass}
        >
          <ConversationMessageContent {...props} />
        </div>
      </li>
    );
  }

  // Default
  return (
    <li className="clearfix" id={"convo-message-" + id}>
      <div className="message-data">
        <img
          src={avatar_url ? avatar_url : "https://via.placeholder.com/40x40"}
          alt="avatar"
          style={avatarStyle}
        />
        <span className="message-data-time me-1">
          {date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
        </span>
      </div>
      <div className={"message my-message float-start" + extraClass}>
        <ConversationMessageContent {...props} />
      </div>
    </li>
  );
};

export default ConversationMessage;
