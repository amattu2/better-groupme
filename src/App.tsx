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
   * Render component
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T14:40:56-050
   */
  render() {
    return (
      <div className="d-flex h-100">
        <Sidebar {...this.props} />
        <Conversation {...this.props} />
      </div>
    );
  }
}
