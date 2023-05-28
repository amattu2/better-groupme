import React, { useEffect, useState, FC } from 'react';
import { useAuth } from './AuthProvider';

const Context = React.createContext<PollProviderState | null>(null);

export const usePollData = (): PollProviderState => {
  const contextState = React.useContext(Context);

  if (contextState === null) {
    throw new Error('usePollData must be used within a PollProvider tag');
  }

  return contextState;
};

export const PollProvider: FC<PollProviderProperties> = (props : any) => {
  const { group_id, poll_id } = props;
  const { accessToken } : AuthProviderState = useAuth();
  const [state, setState] = useState<PollProviderState>({status: 'LOADING'});

  useEffect(() => {
    setState({status: 'LOADING'});

    (async (): Promise<void> => {
      const d = await fetch(`https://api.groupme.com/v3/poll/${group_id}/${poll_id}?access_token=${accessToken}`);
      if (!d || d.status !== 200) {
        setState({status: 'ERROR'});
        return;
      }

      const { response } = await d.json();
      if (!response || !response.poll) {
        setState({status: 'ERROR'});
        return;
      }

      setState({
        status: 'LOADED',
        value: {
          id: response.poll.data.id,
          created_at: response.poll.data.created_at,
          expires_at: response.poll.data.expiration,
          modified_at: response.poll.data.last_modified,
          options: response.poll.data.options,
          subject: response.poll.data.subject,
          type: response.poll.data.type,
          visibility: response.poll.data.visability,
        },
      });
    })();
  }, [group_id, poll_id, accessToken]);

  return (
    <Context.Provider value={state}>
      {props.children}
     </Context.Provider>
  );
};
