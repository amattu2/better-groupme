// Imports
import React from 'react';
import ConversationListHeader from './ConversationListHeader';
import FilterTabs from './FilterTabs';

/**
 * Combines the sidebar component
 */
const SideConversations = (props: any): JSX.Element => {
  return (
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white border-end" style={{width: "350px", zIndex: 998}}>
      <ConversationListHeader />
      <FilterTabs />
    </div>
  );
};

export default SideConversations;
