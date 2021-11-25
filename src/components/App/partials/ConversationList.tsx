// Imports
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../AuthProvider';
import { ListGroup } from 'react-bootstrap';
import ConversationListItem from './ConversationListItem';

/*
 * Generates a list of conversation items
 */
const ConversationList = (props: any): JSX.Element => {
  const { accessToken } : any = useAuth();
  const [data, dataSet] = useState<any>(null)

  /**
   * Fetch Group and Individual chats
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T14:40:56-050
   */
  useEffect(() => {
    (async function() {
      // Variables
      let messages : Array<MessageListMessage> = [];

      // Fetch Groups Data
      const groups = await fetch(`https://api.groupme.com/v3/groups?access_token=${accessToken}&omit=memberships`);
      const groupsJson = await groups.json();
      (groupsJson.response || []).forEach((group : any) => {
        messages.push({
          isGroup: true,
          id: group.id,
          name: group.name,
          message_date: new Date(group.messages.last_message_created_at * 1000),
          message: group.messages.preview.text,
          author: group.messages.preview.nickname
        })
      });

      // Fetch Chats (DMs) Data
      const chats = await fetch(`https://api.groupme.com/v3/chats?access_token=${accessToken}`);
      const chatsJson = await chats.json();
      (chatsJson.response || []).forEach((chat : any) => {
        messages.push({
          isGroup: false,
          id: chat.other_user.id,
          name: chat.other_user.name,
          message_date: new Date(chat.last_message.created_at * 1000),
          message: chat.last_message.text,
          author: null
        })
      });

      // Set Data
      dataSet(messages.sort((a, b) => { return b.message_date.getTime() - a.message_date.getTime(); }));
    })();
  }, []);

  return (
    <ListGroup variant="flush" className="border-bottom scrollarea" style={{overflow: "auto"}}>
      {(data || []).map((chatItem : MessageListMessage, index : number) => (
        <ConversationListItem
          id={chatItem.id}
          key={index}
          isGroup={chatItem.isGroup}
          name={chatItem.name}
          message_date={chatItem.message_date}
          message={chatItem.message}
          author={chatItem.author}
        />
      ))}
    </ListGroup>
  );
};

export default ConversationList;
