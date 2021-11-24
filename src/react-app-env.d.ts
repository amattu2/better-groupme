/// <reference types="react-scripts" />

interface MessageListMessage {
  isGroup: boolean,
  name: string,
  message_date: Date,
  message: string | null,
  author: string | null
};
