import React, { useEffect, useState, FC } from 'react';

const Context = React.createContext<ConversationListProviderState | null>(null);

export const useConversationListData = (): ConversationListProviderState => {
  const contextState = React.useContext(Context);

  if (contextState === null) {
    throw new Error('useConversationListData must be used within a ConversationListProvider tag');
  }

  return contextState;
};

export const ConversationListProvider: FC<ConversationListProviderProperties> = (props : any) => {
  const { token } = props;
  const [state, setState] = useState<ConversationListProviderState>({status: 'LOADING'});

  useEffect(() => {
    setState({status: 'LOADING'});

    (async (): Promise<void> => {
      // Variables
      let messages : Array<ConversationInfo> = [];

      // Fetch Groups Data
      const groups = await fetch(`https://api.groupme.com/v3/groups?access_token=${token}&omit=memberships`);
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
      const chats = await fetch(`https://api.groupme.com/v3/chats?access_token=${token}`);
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

      setState({
        status: 'LOADED',
        value: messages.sort((a, b) => { return b.preview.message_date.getTime() - a.preview.message_date.getTime(); }),
      });
    })();
  }, [token]);

  return (
    <Context.Provider value={state}>
      {props.children}
     </Context.Provider>
  );
};
