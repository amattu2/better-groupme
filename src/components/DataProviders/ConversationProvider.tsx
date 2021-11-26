/*
 * Author: https://spin.atomicobject.com/2020/04/15/react-context-data-provider-pattern/
 */

// Imports
import React, { useEffect, useState, FC } from 'react';
import { useData } from '../DataProvider';

const Context = React.createContext<ConversationProviderState | null>(null);

const formatURL = (type : string | undefined, id : string | undefined, token : string) : string => {
  return type === "group" ? `https://api.groupme.com/v3/groups/${id}/messages?access_token=${token}` :
   `https://api.groupme.com/v3/direct_messages?other_user_id=${id}&access_token=${token}`;
};

export const useConversationData = (): ConversationProviderState => {
  const contextState = React.useContext(Context);
  if (contextState === null) {
    throw new Error('useConversationData must be used within a ConversationProvider tag');
  }
  return contextState;
};

export const ConversationProvider: FC<ConversationProviderProperties> = (props : any) => {
  const { id, type, token } = props;
  const [state, setState] = useState<ConversationProviderState>({status: 'LOADING'});
  const { conversations } : any = useData();

  useEffect(() => {
    setState({status: 'LOADING'});

    (async (): Promise<void> => {
      // Convo
      const convo : any = conversations.filter((d : any) => d.id === id)[0];
      if (!convo || !convo.name) {
        setState({status: 'ERROR'});
        return;
      }

      // Fetch Messages
      const d = await fetch(formatURL(type, id, token));
      if (!d.ok || d.status !== 200) {
        setState({status: 'ERROR'});
        return;
      }

      // Parse JSON
      const { meta, response } = await d.json();
      if (!response || !meta || meta.code !== 200) {
        setState({status: 'ERROR'});
        return;
      }

      // Format Response
      let messages : Array<ConversationMessage> = [];
      (response.messages || response.direct_messages).forEach((message : any) => {
        messages.push({
           avatar_url: message.avatar_url,
           created_at: message.created_at,
           name: message.name,
           text: message.text,
           sender_id: message.sender_id,
           sender_type: message.sender_type,
           id: message.id,
           favorites: message.favorited_by,
           attachments: message.attachments,
           event: message.event,
           isSystem: message.system
        });
      });

      setState({
        status: 'LOADED',
        value: {
          convo: convo,
          messages: messages,
        },
      });
    })();
  }, [id, type, token, conversations]);

  return (
    <Context.Provider value={state}>
      {props.children}
     </Context.Provider>
  );
};
