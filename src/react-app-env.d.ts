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
  children: React.ReactNode,
};

interface ConversationListProviderState1 {
  status: 'LOADING' | 'ERROR'
};

interface ConversationListProviderState2 {
  status: 'LOADED',
  value: Array<ConversationInfo>,
};

type ConversationListProviderState = ConversationListProviderState2 | ConversationListProviderState1;

interface BotInfo {
  id: string,
  name: string,
  avatar_url: string,
  callback_url: string,
  group_id: string,
}

interface BotListProviderState1 {
  status: 'LOADING' | 'ERROR',
  value?: null,
};

interface BotListProviderState2 {
  status: 'LOADED',
  value: Array<BotInfo>,
};

type BotListProviderState = BotListProviderState2 | BotListProviderState1;

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
  children: React.ReactNode,
};
