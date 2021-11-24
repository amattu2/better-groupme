/// <reference types="react-scripts" />

interface MessageListMessage {
  isGroup: boolean,
  id: string,
  name: string,
  message_date: Date,
  message: string | null,
  author: string | null
};

interface AuthProviderState {
  authorize: boolean,
  accessToken: string,
};
