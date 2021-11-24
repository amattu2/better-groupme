// Imports
import React from 'react';

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
export default class AuthProvider extends React.Component<any, any> {
  /**
   * Class constructor
   *
   * @date 2021-11-24T17:47:06-050
   */
  constructor(props : any) {
    super(props);

    /**
     * URL Query Params
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
     * GroupMe Access Token Cookie
     *
     * @type {String}
     */
    const accessToken : string = (document.cookie.match(/^(?:.*;)?\s*access_token\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1] || "";
    if (!accessToken) {
      this.setState({
        result: [{
          authorized: false,
          accessToken: "",
        }]
      });
    } else {
      this.setState({
        result: [{
          authorized: true,
          accessToken: accessToken,
        }]
      });
    }
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.result}></AuthContext.Provider>
    );
  }
}
