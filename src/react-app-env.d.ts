/// <reference types="react-scripts" />

interface ConversationInfo {
  id: string,
  name: string,
  preview: any | null,
  isGroup: boolean,
  isPublic: boolean,
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
  conversations: Array<ConversationInfo>,
};

interface Conversation {
  convo: ConversationInfo,
  messages: Array<ConversationMessage>,
};
