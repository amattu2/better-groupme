import React, { useEffect, useState, FC } from 'react';

const Context = React.createContext<UserProfileProviderState | null>(null);

export const useProfileData = (): UserProfileProviderState => {
  const contextState = React.useContext(Context);

  if (contextState === null) {
    throw new Error('useProfileData must be used within a UserProfileProvider tag');
  }

  return contextState;
};

export const UserProfileProvider: FC<UserProfileProviderProperties> = (props : any) => {
  const { token } = props;
  const [state, setState] = useState<UserProfileProviderState>({status: 'LOADING'});

  useEffect(() => {
    setState({status: 'LOADING'});

    (async (): Promise<void> => {
      const user = await fetch(`https://api.groupme.com/v3/users/me?access_token=${token}`);
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
  }, [token]);

  return (
    <Context.Provider value={state}>
      {props.children}
     </Context.Provider>
  );
};
