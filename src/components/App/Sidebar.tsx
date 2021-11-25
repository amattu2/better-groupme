// Imports
import React from 'react';
import SideNavigation from './partials/SideNavigation';
import SideConversations from './partials/SideConversations';

/**
 * Complete sidebar component
 */
const Sidebar = (props: any): JSX.Element => {
  const { changeConversation } : any = props;

  return (
    <div className="d-flex h-100">
      <SideNavigation />
      <SideConversations changeConversation={changeConversation} />
    </div>
  );
};

export default Sidebar;
