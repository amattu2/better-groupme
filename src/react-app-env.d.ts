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
  accessToken: string,
};

interface HashArgumentFormat {
  type: string | undefined,
  id: string | undefined,
};

interface ConversationMessage {
  avatar_url: string | null,
  created_at: number,
  name: string,
  text: string,
  sender_id: string,
  sender_type: string,
  id: string,
  favorites: Array<string>,
  attachments: Array<any>,
  event: any,
};

interface DataProviderValue {
  conversations: Array<MessageListMessage>,
};
