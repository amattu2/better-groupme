/// <reference types="react-scripts" />

// Imports
import React from 'react';
import Sidebar from './components/Sidebar';
import Conversation from './components/Conversation';

/**
 * Main React class
 */
export default class App extends React.Component<any, any> {
  /**
   * Class constructor
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T14:40:56-050
   */
  constructor(props : object) {
    super(props);
  }

  /**
   * Fetch conversation
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T15:43:41-050
   */
  async changeConversation(accessToken : string, id : string, isGroup : boolean) {
    // Variables
    const url = isGroup ? `https://api.groupme.com/v3/groups/${id}/messages?access_token=${accessToken}` :
      `https://api.groupme.com/v3/direct_messages?other_user_id=${id}&access_token=${accessToken}`
    const data = await fetch(url);
    const dataJson = await data.json();
    console.log(dataJson);
  }

  /**
   * Render component
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T14:40:56-050
   */
  render() {
    return (
      <div className="d-flex h-100">
        <Sidebar {...this.props} changeConversation={this.changeConversation} />
        <Conversation {...this.props} />
      </div>
    );
  }
}
