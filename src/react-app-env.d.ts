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

interface BotInfo {
  id: string,
  name: string,
  avatar_url: string | null,
  callback_url: string,
  group_id: string,
}

interface BotListProviderState1 {
  status: 'LOADING' | 'ERROR'
};

interface BotListProviderState2 {
  status: 'LOADED',
  value: Array<BotInfo>,
};

type BotListProviderState = BotListProviderState2 | BotListProviderState1;

interface BotListProviderProperties {
  token: string,
};

interface UserInfo {
  id: string,
  name: string,
  avatar_url: string | null,
  phone_number: string | null,
  email: string | null,
};

interface UserProfileProviderState1 {
  status: 'LOADING' | 'ERROR'
};

interface UserProfileProviderState2 {
  status: 'LOADED',
  value: UserInfo,
};

type UserProfileProviderState = UserProfileProviderState2 | UserProfileProviderState1;

interface UserProfileProviderProperties {
  token: string,
};

interface PollInfo {
  id: string,
  created_at: number,
  expires_at: number,
  modified_at: number,
  options: Array<any>,
  subject: string,
  type: "multi" | "single",
  visibility: string,
};

interface PollProviderState1 {
  status: 'LOADING' | 'ERROR'
};

interface PollProviderState2 {
  status: 'LOADED',
  value: PollInfo,
};

type PollProviderState = PollProviderState2 | PollProviderState1;

interface PollProviderProperties {
  group_id: string,
  poll_id: string,
  token: string,
};
