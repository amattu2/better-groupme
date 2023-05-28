import React, { useEffect, useState, FC } from 'react';
import { useAuth } from './AuthProvider';

const Context = React.createContext<UserProfileProviderState | null>(null);

export const useProfileData = (): UserProfileProviderState => {
  const contextState = React.useContext(Context);

  if (contextState === null) {
    throw new Error('useProfileData must be used within a UserProfileProvider tag');
  }

  return contextState;
};

export const UserProfileProvider: FC<any> = (props : any) => {
  const { accessToken } : AuthProviderState = useAuth();
  const [state, setState] = useState<UserProfileProviderState>({status: 'LOADING'});

  useEffect(() => {
    setState({status: 'LOADING'});

    (async (): Promise<void> => {
      const user = await fetch(`https://api.groupme.com/v3/users/me?access_token=${accessToken}`);
      if (user.status !== 200) {
        setState({status: "ERROR"});
        return;
      }

      const { response } = await user.json();
      setState({
        status: 'LOADED',
        value: {
          id: response.id,
          name: response.name,
          avatar_url: response.image_url,
          phone_number: response.phone_number,
          email: response.email,
        },
      });
    })();
  }, [accessToken]);

  return (
    <Context.Provider value={state}>
      {props.children}
     </Context.Provider>
  );
};
