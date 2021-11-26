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
  type: string,
  id: string,
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
  isSystem: boolean,
};

interface Conversation {
  convo: ConversationInfo,
  messages: Array<ConversationMessage>,
};

interface ConversationProviderState1 {
  status: 'LOADING' | 'ERROR'
};

interface ConversationProviderState2 {
  status: 'LOADED',
  value: Array<ConversationMessage>,
};

type ConversationProviderState = ConversationProviderState2 | ConversationProviderState1;

interface ConversationProviderProperties {
  id: number,
  type: string,
  token: string,
};

interface ConversationListProviderState1 {
  status: 'LOADING' | 'ERROR'
};

interface ConversationListProviderState2 {
  status: 'LOADED',
  value: Array<ConversationInfo>,
};

type ConversationListProviderState = ConversationListProviderState2 | ConversationListProviderState1;

interface ConversationListProviderProperties {
  token: string,
};
