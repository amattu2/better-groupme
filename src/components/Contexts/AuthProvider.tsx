import React from 'react';

/**
 * Initialize Auth Context
 */
const AuthContext = React.createContext<AuthProviderState>({accessToken: ""});

/**
 * Allow Access to Auth Context
 */
export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (context == null) {
    throw new Error('useAuth must be used within a AuthProvider tag');
  }

  return context;
};

/**
 * User authentication provider
 */
export const AuthProvider = (props: any) => {
  /**
   * GET access_token Parameter
   *
   * @type {URLSearchParams}
   */
  const params : URLSearchParams = new URLSearchParams(window.location.search);
  if (params.get("access_token")) {
    const date = new Date();
    date.setTime(date.getTime() + (7*24*60*60*1000));
    document.cookie = `access_token=${(params.get("access_token") || "")}; expires=${date.toUTCString()}; path=/`;
  }

  /**
   * GroupMe access token
   *
   * @type {String}
   */
  // eslint-disable-next-line no-sparse-arrays
  const accessToken : string = (document.cookie.match(/^(?:.*;)?\s*access_token\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1] || "";

  // Return
  if (accessToken) {
    return <AuthContext.Provider value={{accessToken: accessToken}}>{props.children}</AuthContext.Provider>;
  } else {
    window.location.replace(`https://oauth.groupme.com/oauth/authorize?client_id=${process.env.REACT_APP_GM_CLIENT_ID}`);
    return null;
  }
}
