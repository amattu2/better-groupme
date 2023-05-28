import React, { useEffect, useState, FC } from 'react';

const Context = React.createContext<BotListProviderState | null>(null);

export const useBotListData = (): BotListProviderState => {
  const contextState = React.useContext(Context);

  if (contextState === null) {
    throw new Error('useBotListData must be used within a ConversationListProvider tag');
  }

  return contextState;
};

export const BotListProvider: FC<BotListProviderProperties> = (props : any) => {
  const { token } = props;
  const [state, setState] = useState<BotListProviderState>({status: 'LOADING'});

  useEffect(() => {
    setState({status: 'LOADING'});

    (async (): Promise<void> => {
      // Variables
      let botList : Array<BotInfo> = [];

      // Fetch Groups Data
      const bots = await fetch(`https://api.groupme.com/v3/bots?access_token=${token}`);
      const botsJson = await bots.json();
      (botsJson.response || []).forEach((bot : any) => {
        botList.push({
          id: bot.bot_id,
          group_id: bot.group_id,
          name: bot.name,
          avatar_url: bot.avatar_url,
          callback_url: bot.callback_url,
        })
      });

      setState({
        status: 'LOADED',
        value: botList,
      });
    })();
  }, [token]);

  return (
    <Context.Provider value={state}>
      {props.children}
     </Context.Provider>
  );
};
