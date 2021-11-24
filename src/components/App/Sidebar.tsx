// Imports
import React from 'react';
import SideNavigation from './partials/SideNavigation';
import SideConversations from './partials/SideConversations';

/**
 * Complete sidebar component
 */
export default class Sidebar extends React.Component<any, any> {
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
        <SideNavigation />
        <SideConversations {... this.props} changeConversation={this.props.changeConversation} />
      </div>
    );
  }
}
