import React from 'react';
import SideNavigation from './partials/SideNavigation';
import SideConversations from './partials/SideConversations';

export default class Sidebar extends React.Component<any, any> {
  constructor(props : object) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex h-100">
        <SideNavigation />
        <SideConversations {... this.props} />
      </div>
    );
  }
}
