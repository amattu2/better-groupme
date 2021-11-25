// Imports
import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthProvider';

/**
 * Initialize Auth Context
 */
const DataContext = React.createContext<DataProviderValue | undefined>(undefined);

/**
 * Allow Access to Auth Context
 */
export const useData = () => {
  return React.useContext(DataContext);
};

/**
 * User authentication provider
 */
export const DataProvider = (props: any) => {
  const { accessToken } : any = useAuth();
  const { children } : any = props;
  const [data, dataSet] = useState<any>([]);

  useEffect(() => {
    (async function() {
      // Variables
      let messages : Array<MessageListMessage> = [];

      // Fetch Groups Data
      const groups = await fetch(`https://api.groupme.com/v3/groups?access_token=${accessToken}&omit=memberships`);
      const groupsJson = await groups.json();
      (groupsJson.response || []).forEach((group : any) => {
        messages.push({
          id: group.id,
          name: group.name,
          preview: {
            author: group.messages.preview.nickname,
            message: group.messages.preview.text,
            message_date: new Date(group.messages.last_message_created_at * 1000),
          },
          isGroup: true,
          isPublic: !group.requires_approval,
        })
      });

      // Fetch Chats (DMs) Data
      const chats = await fetch(`https://api.groupme.com/v3/chats?access_token=${accessToken}`);
      const chatsJson = await chats.json();
      (chatsJson.response || []).forEach((chat : any) => {
        messages.push({
          id: chat.other_user.id,
          name: chat.other_user.name,
          preview: {
            author: chat.other_user.name,
            message_date: new Date(chat.last_message.created_at * 1000),
            message: chat.last_message.text,
          },
          isGroup: false,
          isPublic: false,
        })
      });

      // Set Data
      dataSet(messages.sort((a, b) => { return b.preview.message_date.getTime() - a.preview.message_date.getTime(); }));
    })();
  }, [accessToken]);

  // Return
  return <DataContext.Provider value={{conversations: data}}>{children}</DataContext.Provider>;
}
