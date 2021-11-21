import React from 'react';
import SideNavigation from './partials/SideNavigation';
import SideConversations from './partials/SideConversations';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="d-flex h-100">
        <SideNavigation />
        <SideConversations />
      </div>
    );
  }
}
