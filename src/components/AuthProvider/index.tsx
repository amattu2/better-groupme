// Imports
import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Initialize Auth Context
 */
const AuthContext = React.createContext<AuthProviderState | undefined>(undefined);

/**
 * Allow Access to Auth Context
 */
export const useAuth = () => {
  return React.useContext(AuthContext);
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
  const accessToken : string = (document.cookie.match(/^(?:.*;)?\s*access_token\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1] || "";

  // Return
  if (accessToken) {
    return <AuthContext.Provider value={{accessToken: accessToken}}>{props.children}</AuthContext.Provider>;
  } else {
    return <Navigate to="https://example.com" />;
  }
}
